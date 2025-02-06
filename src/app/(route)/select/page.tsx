'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { ROUTES } from '@/constants';

export default function SelectGame() {
  const router = useRouter();
  const setItem = (key: string, item: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, item);
    }
  };

  const onClick = (type: 'balance' | 'multiple') => {
    setItem('surveyType', type);
    router.push(ROUTES.home);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        padding: '0 0.75rem',
      }}
    >
      <Button onClick={() => onClick('balance')}>이중택일 게임</Button>
      <Button onClick={() => onClick('multiple')}>슬라이더 게임</Button>
    </div>
  );
}
