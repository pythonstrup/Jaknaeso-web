import type { QueryFunction } from '@tanstack/react-query';

import { serverApi } from '@/libs/api/api.server';
import type { ResponseDTO } from '@/types';

import type { HistoryResponse, TodaySurveyResponse } from './types';

const getHistory = async () => {
  const res = await serverApi.get<ResponseDTO<HistoryResponse>>(`/api/v1/surveys/history`);
  return res.data.data;
};

const getTodaySurvey: QueryFunction<TodaySurveyResponse> = async ({ queryKey }) => {
  const [bundleId] = queryKey as [string];
  const res = await serverApi.get<ResponseDTO<TodaySurveyResponse>>(`/api/v1/surveys/${bundleId}`);
  return res.data.data;
};

const surveyServerApis = { getHistory, getTodaySurvey };

export default surveyServerApis;
