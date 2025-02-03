'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import { ROUTES } from '@/constants';

import style from './TopBar.module.scss';

const TABS = [
  { href: ROUTES.reportAnalysis, label: '캐릭터 분석' },
  { href: ROUTES.reportQuestions, label: '답변 모아보기' },
];

export default function TopBar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={style.container}>
        {TABS.map((tab) => (
          <li key={tab.href}>
            <Link key={tab.href} href={tab.href}>
              <h1 className={classNames(style.header, { [style.active]: tab.href === pathname })}>{tab.label}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
