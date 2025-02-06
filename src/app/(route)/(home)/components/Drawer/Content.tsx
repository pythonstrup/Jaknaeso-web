import type { PropsWithChildren } from 'react';

import style from './Drawer.module.scss';

export default function DrawerContent({ children }: PropsWithChildren) {
  return <div className={style.info}>{children}</div>;
}
