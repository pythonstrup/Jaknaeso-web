import type { PropsWithChildren } from 'react';
import { Suspense } from 'react';

export default function ReportQuestionsLayout({ children }: PropsWithChildren) {
  return <Suspense>{children}</Suspense>;
}
