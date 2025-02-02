import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/Layout/Footer';
import { TopBar } from '@/components/Layout/TopBar';

export default function ReportLayout({ children }: PropsWithChildren) {
  return (
    <FooterLayout>
      <TopBar />
      {children}
    </FooterLayout>
  );
}
