'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginKakaoPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('code')) {
      console.log(searchParams.get('code'));

      axios
        .post('https://dev.jaknaeso.kro.kr/api/v1/auth/kakao-login', { code: searchParams.get('code') })
        .then((res) => {
          console.log(res);
        });
      // authApis.post({ code: searchParams.get('code') as string }).then((res) => {
      //   console.log('응답', res);
      //   //setTokens(res.data.accessToken, res.data.refreshToken);
      // });
      //router.push(ROUTES.home);
    }
  }, []);

  return <>kakao page loading...</>;
}
