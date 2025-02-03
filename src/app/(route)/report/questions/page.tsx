'use client';

import { useState } from 'react';

import { BottomSheet } from '@/components/BottomSheet';
import { Button } from '@/components/Button';

export default function ReportQuestions() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>클릭</Button>
      <BottomSheet title="월 선택하기" isOpen={open} height={380} closeSheet={() => setOpen(false)} closeIcon>
        <BottomSheet.Content>컨텐츠</BottomSheet.Content>
      </BottomSheet>
    </div>
  );
}
