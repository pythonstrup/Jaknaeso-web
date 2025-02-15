import { PrefetchHydration } from '@/components/ReactQuery';
import { getBundleIdToken, getMemberIdToken } from '@/libs/cookie/manageCookie.server';
import surveyServerApis from '@/query-hooks/useSurvey/api.server';
import surveyKeys from '@/query-hooks/useSurvey/keys';

import ReportQuestionsPage from './components/Page';

export default async function ReportQuestions() {
  const memberId = getMemberIdToken();
  const bundleId = getBundleIdToken();
  return (
    <PrefetchHydration
      queryKey={surveyKeys.list([bundleId])}
      queryFn={() => surveyServerApis.getSubmissions(Number(memberId), { bundleId: Number(bundleId) })}
    >
      <ReportQuestionsPage />
    </PrefetchHydration>
  );
}
