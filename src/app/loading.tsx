'use client';

import { LottieAnimation } from '@/components/LottieAnimation';

import './globals.scss';

export default function Loading() {
  return (
    <div className="loadingContainer">
      <LottieAnimation type="loading" width="300px" height="300px" />
    </div>
  );
}
