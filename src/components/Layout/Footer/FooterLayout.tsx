import type { PropsWithChildren } from 'react';

import Footer from './Footer';
import style from './Footer.module.scss';

export default function FooterLayout({ children }: PropsWithChildren) {
  return (
    <div className={style.layout}>
      <div className={style.content}>{children}</div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}
