import { PrefetchHydration } from '@/components/ReactQuery';
import surveyServerApis from '@/query-hooks/useSurvey/api.server';
import surveyKeys from '@/query-hooks/useSurvey/keys';

import { HomePage } from './components/Page';

export default function Home() {
  return (
    <PrefetchHydration queryKey={surveyKeys.lists()} queryFn={surveyServerApis.getHistory}>
      <HomePage />
    </PrefetchHydration>
  );
}
