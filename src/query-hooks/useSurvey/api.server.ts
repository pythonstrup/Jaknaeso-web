import type { QueryFunction } from '@tanstack/react-query';

import { serverApi } from '@/libs/api/api.server';
import { getMemberIdToken, setBundleIdToken } from '@/libs/cookie/manageCookie.server';
import type { ResponseDTO } from '@/types';

import type {
  HistoryResponse,
  OnboardingResponse,
  SurveyParams,
  SurveySubmissionResponse,
  TodaySurveyResponse,
} from './types';

const getHistory = async () => {
  const { data } = await serverApi.get<ResponseDTO<HistoryResponse>>(`/api/v1/surveys/history`);

  setBundleIdToken(String(data.data.bundleId));
  return data.data;
};

const getTodaySurvey: QueryFunction<TodaySurveyResponse> = async ({ queryKey }) => {
  const [bundleId] = queryKey as [string];
  const res = await serverApi.get<ResponseDTO<TodaySurveyResponse>>(`/api/v1/surveys/${bundleId}`);
  return res.data.data;
};

const getOnboarding: QueryFunction<OnboardingResponse> = async () => {
  const res = await serverApi.get<ResponseDTO<OnboardingResponse>>(`/api/v1/surveys/onboarding`);
  return res.data.data;
};

const getSubmissions = async (params: SurveyParams['get']) => {
  const memberId = await getMemberIdToken();
  const { data } = await serverApi.get<ResponseDTO<SurveySubmissionResponse>>(
    `/api/v1/surveys/members/${memberId}/submissions`,
    { params },
  );

  return data.data;
};

const surveyServerApis = { getHistory, getTodaySurvey, getOnboarding, getSubmissions };

export default surveyServerApis;
