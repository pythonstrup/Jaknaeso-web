'use client';

import { useRouter } from 'next/navigation';

import { ErrorComponent } from '@/components/ErrorComponent';

import './globals.scss';

export default function NotFound() {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };

  return (
    <div className="errorContainer">
      <ErrorComponent
        title="찾을 수 없는 페이지입니다"
        subTitle="홈으로 돌아가거나 다른 메뉴를 이용해보세요."
        redirect={goHome}
      />
    </div>
  );
}
