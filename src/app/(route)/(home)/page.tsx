import { Header } from '@/components/layout';
import PrefetchHydration from '@/providers/PrefetchHydration';
import testApis from '@/query-hooks/useTest/api';

import { Test } from './components/Test';

export default async function Home() {
  return (
    <PrefetchHydration queryKey={['test']} queryFn={testApis.getTest}>
      <Header />
      <Test />
      <h3 className="title2">타이포 적용</h3>
    </PrefetchHydration>
  );
}
