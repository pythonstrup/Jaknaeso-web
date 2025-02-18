import { clientApi } from '@/libs/api/api.client';
import { getMemberIdToken, setBundleIdToken } from '@/libs/cookie/manageCookie.client';
import type { ResponseDTO } from '@/types';

import type {
  HistoryResponse,
  OnboardingResponse,
  OnboardingSubmissionParams,
  SurveyParams,
  SurveySubmission,
  SurveySubmissionResponse,
  TodaySurveyResponse,
} from './types';

const getHistory = async () => {
  const { data } = await clientApi.get<ResponseDTO<HistoryResponse>>('/api/v1/surveys/history');
  setBundleIdToken(String(data.data.bundleId));
  return data.data;
};

const getTodaySurvey = async (bundleId: string) => {
  const res = await clientApi.get<ResponseDTO<TodaySurveyResponse>>(`/api/v1/surveys/${bundleId}`);
  return res.data.data;
};

const getOnboarding = async () => {
  const res = await clientApi.get<ResponseDTO<OnboardingResponse>>(`/api/v1/surveys/onboarding`);
  console.log(res);
  return res.data.data;
};

const submitSurvey = async (surveyId: number, survey: SurveySubmission) => {
  const { data } = await clientApi.post(`/api/v1/surveys/${surveyId}/submission`, survey);
  return data;
};

const submitOnboarding = async (onboarding: OnboardingSubmissionParams) => {
  const { data } = await clientApi.post(`/api/v1/surveys/onboarding/submission`, onboarding);
  return data;
};

const getSubmissions = async (params: SurveyParams['get']) => {
  const memberId = await getMemberIdToken();
  const { data } = await clientApi.get<ResponseDTO<SurveySubmissionResponse>>(
    `/api/v1/surveys/members/${memberId}/submissions`,
    { params },
  );
  return data.data;
};

const surveyApis = { getHistory, getTodaySurvey, getOnboarding, submitSurvey, submitOnboarding, getSubmissions };

export default surveyApis;
