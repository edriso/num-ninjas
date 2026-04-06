import { ImageResponse } from '@vercel/og';
import { prisma, findUserByUsername } from '@numninjas/database';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

const LEVEL_COLORS: Record<number, string> = {
  1: '#f8fafc', // white belt
  2: '#fde047', // yellow
  3: '#fb923c', // orange
  4: '#4ade80', // green
  5: '#1e293b', // black
};

const LEVEL_TEXT_COLORS: Record<number, string> = {
  1: '#1e293b',
  2: '#1e293b',
  3: '#1e293b',
  4: '#1e293b',
  5: '#f8fafc',
};

/**
 * Generate a shareable certificate image for a user.
 *
 * Usage: GET /api/certificate/ahmed123
 * Returns: 1200x630 PNG image (perfect for social sharing / OG)
 *
 * Two types:
 * - Level completion: ?type=level&levelName=الحزام+الأصفر
 * - General profile: (default, shows current stats)
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> },
) {
  const { username } = await params;

  const user = /^\d+$/.test(username)
    ? await prisma.user.findUnique({ where: { id: parseInt(username) }, include: { level: true } })
    : await findUserByUsername(username);

  if (!user) {
    return new Response('Not found', { status: 404 });
  }

  const type = request.nextUrl.searchParams.get('type');
  const levelEmoji = user.level.iconEmoji || '🥷';
  const rankOrder = user.level.rankOrder;
  const bgColor = LEVEL_COLORS[rankOrder] || '#1e293b';
  const textColor = LEVEL_TEXT_COLORS[rankOrder] || '#f8fafc';

  // Level completion certificate
  if (type === 'level') {
    const levelName = request.nextUrl.searchParams.get('levelName') || user.level.name;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: bgColor,
            color: textColor,
            fontFamily: 'sans-serif',
            padding: '60px',
          }}
        >
          <div style={{ fontSize: 80, marginBottom: 20 }}>{levelEmoji}</div>
          <div style={{ fontSize: 28, opacity: 0.7, marginBottom: 10 }}>شهادة إتمام</div>
          <div style={{ fontSize: 52, fontWeight: 700, marginBottom: 20 }}>
            {user.nickname}
          </div>
          <div style={{ fontSize: 32, marginBottom: 40 }}>
            أكمل {levelName} بنجاح!
          </div>
          <div
            style={{
              display: 'flex',
              gap: 40,
              fontSize: 22,
              opacity: 0.8,
            }}
          >
            <span>💎 {user.totalPoints} نقطة</span>
            <span>🔥 {user.streakDays} يوم سلسلة</span>
          </div>
          <div style={{ fontSize: 18, opacity: 0.5, marginTop: 40 }}>
            🥷 نينجا الأرقام — numninjas.com
          </div>
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  // Default: profile certificate (general stats)
  const attempts = await prisma.questionAttempt.count({ where: { userId: user.id } });
  const correct = await prisma.questionAttempt.count({ where: { userId: user.id, isCorrect: true } });
  const accuracy = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          color: '#f8fafc',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>{levelEmoji}</div>
        <div style={{ fontSize: 52, fontWeight: 700, marginBottom: 10 }}>
          {user.nickname}
        </div>
        <div style={{ fontSize: 28, opacity: 0.7, marginBottom: 40 }}>
          {user.level.name}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 50,
            fontSize: 24,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 36, fontWeight: 700 }}>{user.totalPoints}</span>
            <span style={{ opacity: 0.6, fontSize: 18 }}>نقطة</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 36, fontWeight: 700 }}>{user.streakDays}</span>
            <span style={{ opacity: 0.6, fontSize: 18 }}>يوم سلسلة</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 36, fontWeight: 700 }}>{accuracy}%</span>
            <span style={{ opacity: 0.6, fontSize: 18 }}>دقة</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 36, fontWeight: 700 }}>{correct}</span>
            <span style={{ opacity: 0.6, fontSize: 18 }}>صحيحة</span>
          </div>
        </div>
        <div style={{ fontSize: 18, opacity: 0.4, marginTop: 50 }}>
          🥷 نينجا الأرقام — numninjas.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
