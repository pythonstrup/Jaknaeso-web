import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import surveyApis from './api.client';
import surveyKeys from './keys';
import type { SurveyResponse } from './types';

export const useGetSurvey = (options?: UseQueryOptions<SurveyResponse, Error>) => {
  return useQuery<SurveyResponse, Error>({
    queryKey: surveyKeys.lists(),
    queryFn: surveyApis.getHistory,
    ...options,
  });
};
