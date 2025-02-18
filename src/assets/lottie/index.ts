import AchievementAnimation from './achievement.json';
import AdventureAnimation from './adventure.json';
import CelebrateAnimation from './celebrate.json';
import FreeAnimation from './free.json';
import GeneralityAnimation from './generality.json';
import LoadingAnimation from './loading.json';
import NoneAnimation from './none.json';
import PhilanthropyAnimation from './philanthropy.json';
import SafetyAnimation from './safety.json';
import StabilityAnimation from './stability.json';
import WarningAnimation from './warning.json';

const animations = {
  warning: WarningAnimation,
  loading: LoadingAnimation,
  celebrate: CelebrateAnimation,

  achievement: AchievementAnimation,
  adventure: AdventureAnimation,
  free: FreeAnimation,
  generality: GeneralityAnimation,
  none: NoneAnimation,
  philanthropy: PhilanthropyAnimation,
  safety: SafetyAnimation,
  stability: StabilityAnimation,
} as const;

export type AnimationKeys = keyof typeof animations;
export default animations;
