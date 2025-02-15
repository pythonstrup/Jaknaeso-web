import { withoutTokenApi } from '@/libs/api/api';
import { setTokens } from '@/libs/cookie/manageCookie.client';
import type { ResponseDTO } from '@/types';

import type { AuthParams, AuthResponse } from './types';

const postKakao = async (body: AuthParams['postKakao']) => {
  const res = await withoutTokenApi.post<ResponseDTO<AuthResponse>>(`/api/v1/auth/kakao-login`, body);
  return res.data.data;
};

const postApple = async (body: AuthParams['postApple']) => {
  const res = await withoutTokenApi.post<ResponseDTO<AuthResponse>>(`/api/v1/auth/apple-login`, body);
  return res.data.data;
};

const reissue = async (token: string) => {
  const { data } = await withoutTokenApi.post<ResponseDTO<AuthResponse>>(
    `/api/v1/auth/reissue`,
    {},
    {
      headers: {
        'Refresh-Token': `Bearer ${token}`,
      },
    },
  );
  setTokens(data.data.tokenInfo.accessToken, data.data.tokenInfo.refreshToken);
  console.log('토큰 재발급 실행');

  return data.data.tokenInfo.accessToken;
};

const authApis = { postKakao, postApple, reissue };

export default authApis;
