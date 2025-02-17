'use client';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { Button } from '@/components/Button';
import { LottieAnimation } from '@/components/LottieAnimation';
import { ROUTES } from '@/constants';

import styles from './page.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function OnboardingPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideTo = (index: number): void => {
    if (index === 4) {
      return router.push(ROUTES.onboardingGame);
    }

    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
        onInit={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={1}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slideContainer}>
          {/* 전달받는 로티 이미지로 변경 예정 */}
          <LottieAnimation type="celebrate" width="100%" height="20.3125rem" />
          <h3 className="title3">매일 가치관을 묻는 질문에 답변하고</h3>
          <h3 className="title3">나의 하루를 돌아보세요</h3>
        </SwiperSlide>
        <SwiperSlide className={styles.slideContainer}>
          {/* 전달받는 로티 이미지로 변경 예정 */}
          <LottieAnimation type="celebrate" width="100%" height="20.3125rem" />
          <h3 className="title3">15일 동안 답변하면</h3>
          <h3 className="title3">나의 가치관 캐릭터를 알 수 있어요</h3>
        </SwiperSlide>
        <SwiperSlide className={styles.slideContainer}>
          {/* 전달받는 로티 이미지로 변경 예정 */}
          <LottieAnimation type="celebrate" width="100%" height="20.3125rem" />
          <h3 className="title3">답변에 대한 나의 생각을 적어</h3>
          <h3 className="title3">그날의 나를 돌아볼 수 있어요</h3>
        </SwiperSlide>
        <SwiperSlide className={styles.slideContainer}>
          {/* 전달받는 로티 이미지로 변경 예정 */}
          <LottieAnimation type="celebrate" width="100%" height="20.3125rem" />
          <h3 className="title3">먼저 가치관 테스트를 통해</h3>
          <h3 className="title3">나의 가치관 캐릭터를 만들어 볼까요?</h3>
        </SwiperSlide>
      </Swiper>
      <div className={styles.footer}>
        <Button className={styles.button} onClick={() => handleSlideTo(currentSlide)}>
          {currentSlide === 4 ? '시작하기' : '다음으로'}
        </Button>
      </div>
    </div>
  );
}
