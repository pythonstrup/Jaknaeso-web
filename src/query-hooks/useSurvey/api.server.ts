import type { QueryFunction } from '@tanstack/react-query';

import { serverApi } from '@/libs/api/api.server';
import type { ResponseDTO } from '@/types';

import type {
  HistoryResponse,
  OnboardingResponse,
  SurveyParams,
  SurveySubmissionResponse,
  TodaySurveyResponse,
} from './types';

const getHistory = async () => {
  const res = await serverApi.get<ResponseDTO<HistoryResponse>>(`/api/v1/surveys/history`);
  return res.data.data;
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

const getSubmissions = async (memberId: number, params: SurveyParams['get']) => {
  const res = await serverApi.get<ResponseDTO<SurveySubmissionResponse>>(
    `/api/v1/surveys/members/${memberId}/submissions`,
    { params },
  );
  return res.data.data;
};

const surveyServerApis = { getHistory, getTodaySurvey, getOnboarding, getSubmissions };

export default surveyServerApis;
