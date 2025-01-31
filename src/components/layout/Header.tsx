'use client';

import { useRouter } from 'next/navigation';

import { ROUTES } from '@/constants';

import { Button } from '../button';

export default function Header() {
  const router = useRouter();
  return <Button label="login" onClick={() => router.push(ROUTES.login)} />;
}
