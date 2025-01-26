'use client';

import { useGetTest } from '@/query-hooks/useTest/index';

export function Test() {
  const data = useGetTest();
  console.log(data);

  return <div>test</div>;
}
