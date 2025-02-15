import { useRouter } from 'next/navigation';
import { useMutation, type UseMutationOptions, useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { ROUTES } from '@/constants';
import { useToast } from '@/hooks';

import surveyApis from './api.client';
import surveyKeys from './keys';
import type {
  HistoryResponse,
  OnboardingResponse,
  OnboardingSubmissionParams,
  SurveySubmissionParams,
  SurveySubmissionResponse,
  TodaySurveyResponse,
} from './types';

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

const useGetOnboarding = (options?: UseQueryOptions<OnboardingResponse, Error>) =>
  useQuery<OnboardingResponse, Error>({
    queryFn: () => surveyApis.getOnboarding(),
    queryKey: surveyKeys.list(['onboarding']),
    ...options,
  });

const useSubmitSurvey = (options?: UseMutationOptions<null, Error, SurveySubmissionParams>) => {
  const router = useRouter();
  const { showToast } = useToast();

  return useMutation<null, Error, SurveySubmissionParams>({
    mutationFn: ({ surveyId, survey }) => surveyApis.submitSurvey(surveyId, survey),
    onSuccess: () => {
      router.push(ROUTES.gameComplete);
    },
    onError: () => {
      showToast('오늘의 가치관 테스트 제출에 실패했습니다. ');
    },
    ...options,
  });
};

const useSubmitOnboarding = (options?: UseMutationOptions<null, Error, OnboardingSubmissionParams>) => {
  const router = useRouter();
  const { showToast } = useToast();
  return useMutation<null, Error, OnboardingSubmissionParams>({
    mutationFn: (onboarding) => surveyApis.submitOnboarding(onboarding),
    onSuccess: () => {
      router.push('/onboarding/complete');
    },
    onError: () => {
      showToast('가치관 테스트 제출에 실패했습니다. 다시 시도해주세요.');
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

export { useGetOnboarding, useGetSubmissions, useGetSurvey, useGetTodaySurvey, useSubmitOnboarding, useSubmitSurvey };
