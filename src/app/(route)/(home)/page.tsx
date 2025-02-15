import PrefetchMultipleHydration from '@/components/ReactQuery/PrefetchMultipleQueries';
import characterServerApis from '@/query-hooks/useCharacter/api.server';
import characterKeys from '@/query-hooks/useCharacter/keys';
import surveyServerApis from '@/query-hooks/useSurvey/api.server';
import surveyKeys from '@/query-hooks/useSurvey/keys';

import { HomePage } from './components/Page';

export default function Home() {
  return (
    <PrefetchMultipleHydration
      queries={[
        { queryFn: surveyServerApis.getHistory, queryKey: surveyKeys.lists() },
        { queryFn: characterServerApis.getLatestCharacter, queryKey: characterKeys.detail(['latest']) },
      ]}
    >
      <HomePage />
    </PrefetchMultipleHydration>
  );
}
