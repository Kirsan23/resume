interface HardSkill {
  name: string;
  lvl: string;
}

type HardSkills = HardSkill[];
type SkillLevels = string;

const skillLevels: Record<SkillLevels, SkillLevels> = {
  low: 'low',
  medium: 'medium',
  high: 'high',
  ultra: 'ultra',
};

export const HARD_SKILLS: HardSkills = [
  { name: 'HTML', lvl: skillLevels.ultra },
  { name: 'CSS', lvl: skillLevels.ultra },
  { name: 'JS', lvl: skillLevels.high },
  { name: 'TS', lvl: skillLevels.medium },
  { name: 'React', lvl: skillLevels.high },
  { name: 'Material UI', lvl: skillLevels.medium },
  { name: 'Next.js', lvl: skillLevels.low },
  { name: 'Node.js', lvl: skillLevels.low },
  { name: 'Python', lvl: skillLevels.high },
  { name: 'Django', lvl: skillLevels.medium },
  { name: 'Flask', lvl: skillLevels.medium },
  { name: 'SQL', lvl: skillLevels.low },
];