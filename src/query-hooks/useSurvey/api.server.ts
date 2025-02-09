import { serverApi } from '@/libs/api/api.server';
import type { ResponseDTO } from '@/types';

import type { SurveyResponse } from './types';

const getHistory = async () => {
  const res = await serverApi.get<ResponseDTO<SurveyResponse>>(`/api/v1/surveys/history`);
  return res.data.data;
};

const surveyServerApis = { getHistory };

export default surveyServerApis;
