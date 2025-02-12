'use client';

import { isIOS, isMacOs } from 'react-device-detect';
import Link from 'next/link';

import { AppleLoginButton, KakaoLoginButton } from '@/assets/buttons';
import { redirectUri } from '@/libs';
import { useAuthMutation } from '@/query-hooks/useAuth';

import styles from './login.module.scss';

export default function LoginPage() {
  const { postAppleAuth } = useAuthMutation();

  const handleKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  };
  const handleAppleLogin = async () => {
    const data = await window.AppleID.auth.signIn();
    const idToken = data.authorization.id_token;
    const name = (data.user?.name?.lastName ?? '') + (data.user?.name?.firstName ?? '');
    await postAppleAuth.mutateAsync({ idToken, name });
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}></div>
      <div className={styles.footer}>
        <KakaoLoginButton onClick={handleKakaoLogin} />
        {(isIOS || isMacOs) && <AppleLoginButton onClick={handleAppleLogin} />}
        <div className={styles.termSection}>
          로그인하시면 Loopy의{' '}
          <Link href="/term" className={styles.link}>
            개인정보처리방침
          </Link>
          에 동의하는 것으로 간주합니다.
          <br />
          로그인 오류시 문의{' '}
          <Link href="mailto:app.jaknaeso@gmail.com" className={styles.link}>
            app.jaknaeso@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
