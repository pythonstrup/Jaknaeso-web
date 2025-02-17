import PrefetchHydration from '@/providers/PrefetchHydration';
import surveyServerApis from '@/query-hooks/useSurvey/api.server';
import surveyKeys from '@/query-hooks/useSurvey/keys';

import OnboardingClientPage from './components/OnboardingClientPage';

export default async function Onboarding() {
  return (
    <PrefetchHydration queryKey={surveyKeys.list(['onboarding'])} queryFn={surveyServerApis.getOnboarding}>
      <OnboardingClientPage />
    </PrefetchHydration>
  );
}
