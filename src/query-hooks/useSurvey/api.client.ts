import { clientApi } from '@/libs/api/api.client';
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
  const res = await clientApi.get<ResponseDTO<HistoryResponse>>('/api/v1/surveys/history');
  return res.data.data;
};

const getTodaySurvey = async (bundleId: string) => {
  const res = await clientApi.get<ResponseDTO<TodaySurveyResponse>>(`/api/v1/surveys/${bundleId}`);
  return res.data.data;
};

const getOnboarding = async () => {
  const res = await clientApi.get<ResponseDTO<OnboardingResponse>>(`/api/v1/surveys/onboarding`);
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

const getSubmissions = async (memberId: number, params: SurveyParams['get']) => {
  const res = await clientApi.get<ResponseDTO<SurveySubmissionResponse>>(
    `/api/v1/surveys/members/${memberId}/submissions`,
    { params },
  );
  return res.data.data;
};

const surveyApis = { getHistory, getTodaySurvey, getOnboarding, submitSurvey, submitOnboarding, getSubmissions };

export default surveyApis;
