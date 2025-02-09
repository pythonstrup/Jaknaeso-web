'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { redirectUri } from '@/libs';
import { useAuthMutation } from '@/query-hooks/useAuth';

export default function LoginKakaoPage() {
  const searchParams = useSearchParams();
  const { postKakaoAuth } = useAuthMutation();

  useEffect(() => {
    if (searchParams.get('code')) {
      postKakaoAuth.mutateAsync({ code: searchParams.get('code') as string, redirectUri });
    }
  }, [searchParams]);

  return <>kakao page loading...</>;
}
