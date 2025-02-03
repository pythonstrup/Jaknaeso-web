import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/Layout/Footer';

export default function HomeLayout({ children }: PropsWithChildren) {
  return <FooterLayout>{children}</FooterLayout>;
}
