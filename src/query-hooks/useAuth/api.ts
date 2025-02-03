import { withoutTokenApi } from '@/libs/api/api';
import { setTokens } from '@/libs/cookie/manageCookie.client';
import type { ResponseDTO } from '@/types';

import type { AuthParams, AuthResponse } from './types';

const post = async (body: AuthParams['post']) => {
  const res = await withoutTokenApi.post<ResponseDTO<AuthResponse>>(`/api/v1/auth/kakao-login`, body);
  return res;
};

const reissue = async (token: string) => {
  const { data } = await withoutTokenApi.post<ResponseDTO<AuthResponse>>(`/api/v1/auth/reissue`, token);
  setTokens(data.data.accessToken, data.data.refreshToken);
  console.log('토큰 재발급 실행');

  return data.data.accessToken;
};

const authApis = { post, reissue };

export default authApis;
