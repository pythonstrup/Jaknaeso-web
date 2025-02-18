import type { AnimationKeys } from '@/assets/lottie';

import type { CharacterKeys } from './enums';

type CharacterItem = {
  label: string;
  type: AnimationKeys;
  content: string;
};
export const CHARACTERS: Record<CharacterKeys, CharacterItem> = {
  SUCCESS: {
    label: '성취',
    type: 'achievement',
    content: '성취를 쫓는\n노력가 유형',
  },
  ADVENTURE: {
    label: '모험',
    type: 'adventure',
    content: '오지를 찾아 떠나는\n모험가 유형',
  },
  SELF_DIRECTION: {
    label: '자율',
    type: 'free',
    content: '나만의 길을 찾는\n개척자 유형',
  },
  UNIVERSALISM: {
    label: '보편',
    type: 'generality',
    content: '절묘한 균형의\n추구자 유형',
  },
  BENEVOLENCE: {
    label: '박애',
    type: 'philanthropy',
    content: '아낌없이 퍼주는\n보금자리 유형',
  },
  SECURITY: {
    label: '안전',
    type: 'safety',
    content: '튼튼한 보안\n전문가 유형',
  },
  STABILITY: {
    label: '안정',
    type: 'stability',
    content: '마음의 평정을 찾는\n명상가 유형',
  },
} as const;
