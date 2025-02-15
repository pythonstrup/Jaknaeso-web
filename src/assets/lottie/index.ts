import CelebrateAnimation from './celebrate.json';
import LoadingAnimation from './loading.json';
import WarningAnimation from './warning.json';

const animations = {
  warning: WarningAnimation,
  loading: LoadingAnimation,
  celebrate: CelebrateAnimation,
};

export type AnimationKeys = keyof typeof animations;
export default animations;
