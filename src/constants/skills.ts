import { SkillType } from "../types/SkillType";

export const SKILL_NAMES: Record<SkillType, string> = {
    [SkillType.FARMING]: "Farming",
    [SkillType.FISHING]: "Fishing",
    [SkillType.FORAGING]: "Foraging",
    [SkillType.MINING]: "Mining",
    [SkillType.COMBAT]: "Combat",
};

export const SKILL_LEVEL_KEYS = [
    'farmingLevel',
    'fishingLevel',
    'foragingLevel',
    'miningLevel',
    'combatLevel'
] as const;

export type SkillLevelKey = typeof SKILL_LEVEL_KEYS[number];

export const SKILL_ICONS = {
    [SkillType.FARMING]: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/82/Farming_Skill_Icon.png/32px-Farming_Skill_Icon.png",
    [SkillType.FISHING]: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e7/Fishing_Skill_Icon.png/32px-Fishing_Skill_Icon.png",
    [SkillType.FORAGING]: "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Foraging_Skill_Icon.png/32px-Foraging_Skill_Icon.png",
    [SkillType.MINING]: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Mining_Skill_Icon.png/32px-Mining_Skill_Icon.png",
    [SkillType.COMBAT]: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/cf/Combat_Skill_Icon.png/32px-Combat_Skill_Icon.png",
} as const;

export const SKILL_CONFIG = Object.entries(SKILL_NAMES).map(([skillType, name]) => ({
    name,
    levelKey: SKILL_LEVEL_KEYS[Number(skillType)] as SkillLevelKey,
    expIndex: Number(skillType) as SkillType,
    icon: SKILL_ICONS[Number(skillType) as SkillType],
  }));