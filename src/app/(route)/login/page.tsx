'use client';

import { Button } from '@/components/Button';
import { redirectUri } from '@/libs';

export default function LoginPage() {
  const handleKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  };
  return <Button onClick={handleKakaoLogin}>{'kakao login'}</Button>;
}
