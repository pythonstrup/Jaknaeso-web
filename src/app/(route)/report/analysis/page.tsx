import { PrefetchHydration } from '@/components/ReactQuery';
import { getMemberIdToken } from '@/libs/cookie/manageCookie.server';
import characterServerApis from '@/query-hooks/useCharacter/api.server';
import characterKeys from '@/query-hooks/useCharacter/keys';

import ReportAnalysisPage from './components/Page/Page';

export default async function ReportAnalysis() {
  const memberId = getMemberIdToken();
  return (
    <PrefetchHydration
      queryKey={characterKeys.lists()}
      queryFn={() => characterServerApis.getCharacters({ memberId: Number(memberId) })}
    >
      <ReportAnalysisPage />
    </PrefetchHydration>
  );
}
