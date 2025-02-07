'use client';

import { AppleLoginButton, KakaoLoginButton } from '@/assets/buttons';
import { redirectUri } from '@/libs';
import { isIOS, isMacOs } from 'react-device-detect';

import styles from './login.module.scss';

export default function LoginPage() {
  const handleKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  };
  const handleAppleLogin = async () => {
    const data = await window.AppleID.auth.signIn();
    const idToken = data.authorization.id_token;
    const name = (data.user?.name?.lastName ?? '') + (data.user?.name?.firstName ?? '');
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 그래픽 영역으로 교체될 영역 */}
        <div
          style={{
            width: '100%',
            height: '21.875rem',
            borderRadius: '1.625rem',
            background: '#DFE3E9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#6A6A6A',
          }}
        >
          그래픽 영역
        </div>
      </div>
      <div className={styles.footer}>
        <KakaoLoginButton onClick={handleKakaoLogin} />
        {(isIOS || isMacOs) && <AppleLoginButton onClick={handleAppleLogin} />}
      </div>
    </div>
  );
}
