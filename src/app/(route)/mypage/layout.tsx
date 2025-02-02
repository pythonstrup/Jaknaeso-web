import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/Layout/Footer';

export default function MyPageLayout({ children }: PropsWithChildren) {
  return <FooterLayout>{children}</FooterLayout>;
}
