import type { PropsWithChildren } from 'react';

import style from './Drawer.module.scss';
export default function DrawerFooter({ children }: PropsWithChildren) {
  return <div className={style.footer}>{children}</div>;
}
