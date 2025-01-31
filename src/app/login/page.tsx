'use client';

import { Button } from '@/components/button';
import { redirectUri } from '@/libs';

export default function LoginPage() {
  const handleKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  };
  return (
    <>
      <Button label="kakao login" onClick={handleKakaoLogin} />
    </>
  );
}
