import { useRouter } from 'next/navigation';
import { useMutation, type UseMutationOptions, useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { ROUTES } from '@/constants';

import surveyApis from './api.client';
import surveyKeys from './keys';
import type { HistoryResponse, SurveySubmissionParams, SurveySubmissionResponse, TodaySurveyResponse } from './types';

const useGetSurvey = (options?: UseQueryOptions<HistoryResponse, Error>) => {
  return useQuery<HistoryResponse, Error>({
    queryKey: surveyKeys.lists(),
    queryFn: surveyApis.getHistory,
    ...options,
  });
};

const useGetTodaySurvey = (bundleId: string, options?: UseQueryOptions<TodaySurveyResponse, Error>) =>
  useQuery<TodaySurveyResponse, Error>({
    queryFn: () => surveyApis.getTodaySurvey(bundleId),
    queryKey: surveyKeys.list([bundleId]),
    ...options,
  });

const useSubmitSurvey = (options?: UseMutationOptions<null, Error, SurveySubmissionParams>) => {
  const router = useRouter();
  return useMutation<null, Error, SurveySubmissionParams>({
    mutationFn: ({ surveyId, survey }) => surveyApis.submitSurvey(surveyId, survey),
    onSuccess: () => {
      router.push(ROUTES.gameComplete);
    },
    onError: () => {
      // 토스트 컴포넌트로 교체 예정
      console.log('게임 결과 제출 실패');
    },
    ...options,
  });
};

const useGetSubmissions = (
  memberId: number,
  bundleId: string,
  options?: UseQueryOptions<SurveySubmissionResponse, Error>,
) => {
  return useQuery<SurveySubmissionResponse, Error>({
    queryKey: surveyKeys.list([bundleId]),
    queryFn: () => surveyApis.getSubmissions(memberId, { bundleId: Number(bundleId) }),
    ...options,
  });
};

export { useGetSubmissions, useGetSurvey, useGetTodaySurvey, useSubmitSurvey };
