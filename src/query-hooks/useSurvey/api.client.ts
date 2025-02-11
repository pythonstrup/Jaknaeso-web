import { clientApi } from '@/libs/api/api.client';
import type { ResponseDTO } from '@/types';

import type { HistoryResponse, SurveySubmission, TodaySurveyResponse } from './types';

const getHistory = async () => {
  const res = await clientApi.get<ResponseDTO<HistoryResponse>>('/api/v1/surveys/history');
  return res.data.data;
};

const getTodaySurvey = async (bundleId: string) => {
  const res = await clientApi.get<ResponseDTO<TodaySurveyResponse>>(`/api/v1/surveys/${bundleId}`);
  return res.data.data;
};

const submitSurvey = async (bundleId: string, survey: SurveySubmission) => {
  const { data } = await clientApi.post(`/api/v1/surveys/${bundleId}/submission`, survey);
  return data;
};

const surveyApis = { getHistory, getTodaySurvey, submitSurvey };

export default surveyApis;
