import { type PropsWithChildren, Suspense } from 'react';

export default function LoginPageLayout({ children }: PropsWithChildren) {
  return <Suspense>{children}</Suspense>;
}
