'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { LottieAnimation } from '@/components/LottieAnimation';
import { redirectUri } from '@/libs';
import { useAuthMutation } from '@/query-hooks/useAuth';

import styles from './page.module.scss';
export default function LoginKakaoPage() {
  const searchParams = useSearchParams();
  const { postKakaoAuth } = useAuthMutation();

  useEffect(() => {
    if (searchParams.get('code')) {
      postKakaoAuth.mutateAsync({ code: searchParams.get('code') as string, redirectUri });
    }
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <LottieAnimation type="loading" width="200px" height="200px" />
    </div>
  );
}
