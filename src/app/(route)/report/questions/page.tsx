import surveyKeys from '@/query-hooks/useSurvey/keys';
import surveyServerApis from '@/query-hooks/useSurvey/api.server';

import { PrefetchHydration } from '@/components/ReactQuery';

import ReportQuestionsPage from './components/Page';
import { getBundleIdToken, getMemberIdToken } from '@/libs/cookie/manageCookie.server';

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
