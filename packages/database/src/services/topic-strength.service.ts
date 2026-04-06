import prisma from '../client';

export interface TopicStrength {
  topicId: number;
  topicName: string;
  totalAttempts: number;
  correctAttempts: number;
  accuracy: number;
  /** 0.0 = mastered (low priority), 1.0 = struggling (high priority) */
  weight: number;
}

/**
 * Calculate per-topic strength for a user within their current level.
 *
 * How weighting works:
 * - accuracy 0%   → weight 1.0  (struggling, needs more practice)
 * - accuracy 50%  → weight 0.5
 * - accuracy 100% → weight 0.1  (mastered, still appears occasionally)
 * - no attempts   → weight 0.6  (unexplored, moderate priority)
 *
 * The weights are used by prepare-questions to bias question selection
 * toward topics the kid is weak at.
 */
export async function getTopicStrengths(
  userId: number,
  levelId: number,
  lookbackDays = 30,
): Promise<TopicStrength[]> {
  // Get all topics for this level
  const topics = await prisma.topic.findMany({
    where: { levelId },
    orderBy: { orderInLevel: 'asc' },
  });

  if (topics.length === 0) return [];

  // Get recent attempts for this user, grouped by topic
  const cutoff = new Date();
  cutoff.setUTCDate(cutoff.getUTCDate() - lookbackDays);

  const attempts = await prisma.questionAttempt.findMany({
    where: {
      userId,
      answeredAt: { gte: cutoff },
      question: { topic: { levelId } },
    },
    select: {
      isCorrect: true,
      question: { select: { topicId: true } },
    },
  });

  // Aggregate per topic
  const topicStats = new Map<number, { total: number; correct: number }>();
  for (const a of attempts) {
    const stats = topicStats.get(a.question.topicId) ?? { total: 0, correct: 0 };
    stats.total++;
    if (a.isCorrect) stats.correct++;
    topicStats.set(a.question.topicId, stats);
  }

  return topics.map((topic) => {
    const stats = topicStats.get(topic.id);

    if (!stats || stats.total === 0) {
      // No attempts on this topic — moderate priority
      return {
        topicId: topic.id,
        topicName: topic.name,
        totalAttempts: 0,
        correctAttempts: 0,
        accuracy: 0,
        weight: 0.6,
      };
    }

    const accuracy = stats.correct / stats.total;
    // Weight: inverse of accuracy, with minimum 0.1 so mastered topics still appear
    const weight = Math.max(0.1, 1 - accuracy);

    return {
      topicId: topic.id,
      topicName: topic.name,
      totalAttempts: stats.total,
      correctAttempts: stats.correct,
      accuracy: Math.round(accuracy * 100) / 100,
      weight: Math.round(weight * 100) / 100,
    };
  });
}

/**
 * Pick N distinct topics using weighted random selection.
 * Topics with higher weight (lower accuracy) are more likely to be picked.
 */
export function pickWeightedTopics(strengths: TopicStrength[], count: number): TopicStrength[] {
  if (strengths.length <= count) return [...strengths];

  const picked: TopicStrength[] = [];
  const remaining = [...strengths];

  for (let i = 0; i < count; i++) {
    const totalWeight = remaining.reduce((sum, s) => sum + s.weight, 0);
    let random = Math.random() * totalWeight;

    for (let j = 0; j < remaining.length; j++) {
      random -= remaining[j].weight;
      if (random <= 0) {
        picked.push(remaining[j]);
        remaining.splice(j, 1);
        break;
      }
    }
  }

  return picked;
}
