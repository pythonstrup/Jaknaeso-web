import LoadingAnimation from './loading.json';
import WarningAnimation from './warning.json';

const animations = {
  warning: WarningAnimation,
  loading: LoadingAnimation,
};

export type AnimationKeys = keyof typeof animations;
export default animations;
