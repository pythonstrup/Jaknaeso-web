'use client';

import { useRouter } from 'next/navigation';

import { ErrorComponent } from '@/components/ErrorComponent';

import './globals.scss';

interface ErrorProps {
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };
  return (
    <div className="errorContainer">
      <ErrorComponent
        title="오류가 발생했어요!"
        subTitle="일시적인 오류가 발생했어요 \n화면을 새로고침 해주세요."
        reset={reset}
        redirect={goHome}
      />
    </div>
  );
}
