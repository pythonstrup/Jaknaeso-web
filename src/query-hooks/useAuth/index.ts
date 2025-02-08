import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { ROUTES } from '@/constants';
import { setTokens } from '@/libs/cookie/manageCookie.client';

import authApis from './api';

export const useAuthMutation = () => {
  const router = useRouter();
  const postAuth = useMutation({
    mutationFn: authApis.post,
    onSuccess: (res) => {
      setTokens(res.data.data.accessToken, res.data.data.refreshToken);
      router.push(ROUTES.home);
    },
  });

  return { postAuth };
};
