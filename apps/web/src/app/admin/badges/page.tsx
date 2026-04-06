import { prisma } from "@numninjas/database";
import { BadgeList } from "@/components/admin/badge-list";

export default async function BadgesPage() {
  const badges = await prisma.badge.findMany({
    orderBy: [{ badgeType: "asc" }, { id: "asc" }],
  });

  const badgesData = badges.map((badge) => ({
    id: badge.id,
    name: badge.name,
    description: badge.description,
    iconEmoji: badge.iconEmoji,
    awardTitle: badge.awardTitle,
    badgeType: badge.badgeType,
    rankPosition: badge.rankPosition,
  }));

  return <BadgeList badges={badgesData} />;
}
