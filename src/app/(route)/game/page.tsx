'use client';

import { useState } from 'react';

import { BottomSheet } from '@/components/BottomSheet';
import { Button } from '@/components/Button';

export default function Game() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>클릭</Button>
      <BottomSheet title="답변을 선택한 이유를 알려주세요" isOpen={open} height={380} closeSheet={() => setOpen(false)}>
        <BottomSheet.Content>컨텐츠</BottomSheet.Content>
        <BottomSheet.Footer>
          <Button style={{ height: '58px' }}>작성 완료</Button>
        </BottomSheet.Footer>
      </BottomSheet>
    </div>
  );
}
