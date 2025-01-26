import PrefetchHydration from '@/providers/PrefetchHydration';
import testApis from '@/query-hooks/useTest/api';

import { Test } from './components/Test';

export default async function Home() {
  return (
    <PrefetchHydration queryKey={['test']} queryFn={testApis.getTest}>
      <Test />
    </PrefetchHydration>
  );
}
