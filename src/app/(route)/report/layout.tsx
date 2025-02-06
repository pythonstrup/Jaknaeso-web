import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/Layout/Footer';

export default function ReportLayout({ children }: PropsWithChildren) {
  return (
    <FooterLayout>
      {/*<TopBar />*/} {/* 1차 MVP 미포함 */}
      {children}
    </FooterLayout>
  );
}
