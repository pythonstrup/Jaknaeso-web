import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { ROUTES } from '@/constants';
import { setIsCompletedOnboarding, setTokens } from '@/libs/cookie/manageCookie.client';
import { useMemberStore } from '@/stores';

import memberApis from '../useMember/api.client';

import authApis from './api';

export const useAuthMutation = () => {
  const router = useRouter();
  const { setMember } = useMemberStore();
  const postKakaoAuth = useMutation({
    mutationFn: authApis.postKakao,
    onSuccess: (res) => {
      setTokens(res.tokenInfo.accessToken, res.tokenInfo.refreshToken);
      setIsCompletedOnboarding(res.isCompletedOnboarding);
      memberApis.get(res.memberId).then((member) => {
        setMember({
          ...member,
          memberId: res.memberId,
        });
      });

      if (res.isCompletedOnboarding) {
        router.push(ROUTES.home);
      } else {
        router.push(ROUTES.onboarding);
      }
    },
  });
  const postAppleAuth = useMutation({
    mutationFn: authApis.postApple,
    onSuccess: (res) => {
      setTokens(res.tokenInfo.accessToken, res.tokenInfo.refreshToken);
      setIsCompletedOnboarding(res.isCompletedOnboarding);

      memberApis.get(res.memberId).then((member) => {
        setMember({
          ...member,
          memberId: res.memberId,
        });
      });

      if (res.isCompletedOnboarding) {
        router.push(ROUTES.home);
      } else {
        router.push(ROUTES.onboarding);
      }
    },
  });

  return { postKakaoAuth, postAppleAuth };
};
