'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/constants';

export default function LoginKakaoPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('code')) {
      console.log(searchParams.get('code'));
      router.push(ROUTES.home);
    }
  }, [searchParams]);

  return <>kakao page loading...</>;
}
