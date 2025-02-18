import { LottieAnimation } from '@/components/LottieAnimation';

import styles from './EmptyTab.module.scss';

interface EmptyCardProps {
  title: string;
  subTitle: string;
}
export default function EmptyCard({ title, subTitle }: EmptyCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LottieAnimation type="none" width="200px" height="200px" />
        <h2>{title}</h2>
        <h5>{subTitle}</h5>
      </div>
    </div>
  );
}
