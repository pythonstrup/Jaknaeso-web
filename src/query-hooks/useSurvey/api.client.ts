import { clientApi } from '@/libs/api/api.client';
import type { ResponseDTO } from '@/types';

import type { SurveyResponse } from './types';

const getHistory = async () => {
  const res = await clientApi.get<ResponseDTO<SurveyResponse>>('/api/v1/surveys/history');
  return res.data.data;
};

const surveyApis = { getHistory };

export default surveyApis;
