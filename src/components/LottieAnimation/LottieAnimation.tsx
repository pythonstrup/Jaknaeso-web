import dynamic from 'next/dynamic';

import animations, { type AnimationKeys } from '@/assets/lottie';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

type LottieAnimationProps = {
  play?: boolean;
  loop?: boolean;
  type: AnimationKeys;
  width?: string;
  height?: string;
};

export default function LottieAnimation({
  type,
  play = true,
  loop = true,
  width = '100px',
  height = '100px',
}: LottieAnimationProps) {
  return <Lottie play={play} loop={loop} animationData={animations[type]} style={{ width, height }} />;
}
