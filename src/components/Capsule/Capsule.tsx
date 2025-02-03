import type { PropsWithChildren } from 'react';

import styles from './Capsule.module.scss';

export default function Capsule({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
