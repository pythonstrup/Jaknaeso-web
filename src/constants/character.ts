import {
  AchievementImg,
  AdventureImg,
  FreeImg,
  GeneralityImg,
  PhilanthropyImg,
  SafetyImg,
  StabilityImg,
} from '@/assets/illustration';

export const CHARACTERS = {
  SUCCESS: {
    label: '성취',
    image: AchievementImg,
    content: '성취를 쫓는\n노력가 유형',
  },
  ADVENTURE: {
    label: '모험',
    image: AdventureImg,
    content: '오지를 찾아 떠나는\n모험가 유형',
  },
  SELF_DIRECTION: {
    label: '자율',
    image: FreeImg,
    content: '나만의 길을 찾는\n개척자 유형',
  },
  UNIVERSALISM: {
    label: '보편',
    image: GeneralityImg,
    content: '절묘한 균형의\n추구자 유형',
  },
  BENEVOLENCE: {
    label: '박애',
    image: PhilanthropyImg,
    content: '아낌없이 퍼주는\n보금자리 유형',
  },
  SECURITY: {
    label: '안전',
    image: SafetyImg,
    content: '튼튼한 보안\n전문가 유형',
  },
  STABILITY: {
    label: '안정',
    image: StabilityImg,
    content: '마음의 평정을 찾는\n명상가 유형',
  },
} as const;
