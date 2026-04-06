import { describe, it, expect } from 'vitest';
import { pickWeightedTopics, type TopicStrength } from '../services/topic-strength.service';

function makeTopic(id: number, weight: number, name?: string): TopicStrength {
  return {
    topicId: id,
    topicName: name || `Topic ${id}`,
    totalAttempts: 10,
    correctAttempts: 5,
    accuracy: 0.5,
    weight,
  };
}

describe('pickWeightedTopics', () => {
  it('should return the requested number of topics', () => {
    const topics = [makeTopic(1, 0.5), makeTopic(2, 0.3), makeTopic(3, 0.8), makeTopic(4, 0.2)];
    const result = pickWeightedTopics(topics, 2);
    expect(result).toHaveLength(2);
  });

  it('should return all topics when count equals array length', () => {
    const topics = [makeTopic(1, 0.5), makeTopic(2, 0.3)];
    const result = pickWeightedTopics(topics, 2);
    expect(result).toHaveLength(2);
  });

  it('should return all topics when count exceeds array length', () => {
    const topics = [makeTopic(1, 0.5), makeTopic(2, 0.3)];
    const result = pickWeightedTopics(topics, 5);
    expect(result).toHaveLength(2);
  });

  it('should return an empty array for empty input', () => {
    const result = pickWeightedTopics([], 3);
    expect(result).toEqual([]);
  });

  it('should return one topic when count is 1', () => {
    const topics = [makeTopic(1, 0.5), makeTopic(2, 0.3), makeTopic(3, 0.8)];
    const result = pickWeightedTopics(topics, 1);
    expect(result).toHaveLength(1);
    expect(topics.map((t) => t.topicId)).toContain(result[0].topicId);
  });

  it('should return distinct topics (no duplicates)', () => {
    const topics = [
      makeTopic(1, 0.5),
      makeTopic(2, 0.3),
      makeTopic(3, 0.8),
      makeTopic(4, 0.2),
      makeTopic(5, 0.9),
    ];
    const result = pickWeightedTopics(topics, 3);
    const ids = result.map((t) => t.topicId);
    expect(new Set(ids).size).toBe(3);
  });

  it('should not mutate the original array', () => {
    const topics = [makeTopic(1, 0.5), makeTopic(2, 0.3), makeTopic(3, 0.8)];
    const originalLength = topics.length;
    pickWeightedTopics(topics, 2);
    expect(topics).toHaveLength(originalLength);
  });

  it('should only return topics from the input', () => {
    const topics = [makeTopic(1, 0.5), makeTopic(2, 0.3), makeTopic(3, 0.8)];
    const validIds = topics.map((t) => t.topicId);
    const result = pickWeightedTopics(topics, 2);
    for (const picked of result) {
      expect(validIds).toContain(picked.topicId);
    }
  });

  it('should favor higher-weight topics statistically', () => {
    // One very high weight topic and several very low weight topics
    const topics = [
      makeTopic(1, 1.0), // struggling — should be picked most often
      makeTopic(2, 0.1),
      makeTopic(3, 0.1),
      makeTopic(4, 0.1),
      makeTopic(5, 0.1),
    ];

    const pickCounts = new Map<number, number>();
    const iterations = 1000;

    for (let i = 0; i < iterations; i++) {
      const result = pickWeightedTopics(topics, 1);
      const id = result[0].topicId;
      pickCounts.set(id, (pickCounts.get(id) || 0) + 1);
    }

    // Topic 1 (weight 1.0) should be picked significantly more often
    // than any single low-weight topic (weight 0.1)
    const topic1Count = pickCounts.get(1) || 0;
    const topic2Count = pickCounts.get(2) || 0;
    expect(topic1Count).toBeGreaterThan(topic2Count);
  });

  it('should handle all topics having equal weight', () => {
    const topics = [makeTopic(1, 0.5), makeTopic(2, 0.5), makeTopic(3, 0.5)];
    const result = pickWeightedTopics(topics, 2);
    expect(result).toHaveLength(2);
    const ids = result.map((t) => t.topicId);
    expect(new Set(ids).size).toBe(2);
  });

  it('should handle a single topic', () => {
    const topics = [makeTopic(1, 0.5)];
    const result = pickWeightedTopics(topics, 1);
    expect(result).toHaveLength(1);
    expect(result[0].topicId).toBe(1);
  });

  it('should return a shallow copy when count >= length', () => {
    const topics = [makeTopic(1, 0.5), makeTopic(2, 0.3)];
    const result = pickWeightedTopics(topics, 5);
    expect(result).not.toBe(topics);
    expect(result).toEqual(topics);
  });
});
