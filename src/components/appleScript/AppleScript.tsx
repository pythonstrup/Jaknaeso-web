'use client';

import Script from 'next/script';

export default function AppleScript() {
  const handleAppleInit = () => {
    window.AppleID.auth.init({
      clientId: 'com.jaknaeso.login',
      scope: 'name email',
      redirectURI: `${process.env.NEXT_PUBLIC_URL}/oauth2/login/code/apple`,
      state: '550e8400-e29b-41d4-a716-446655440000',
      usePopup: true,
    });
    document.addEventListener('AppleIDSignInOnFailure', (event: any) => {
      console.error('애플로그인 실패!');
    });
  };
  return (
    <Script
      src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
      crossOrigin="anonymous"
      onLoad={handleAppleInit}
    />
  );
}
