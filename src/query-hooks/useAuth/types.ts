export type AuthParams = {
  postKakao: {
    code: string;
    redirectUri: string;
  };
  postApple: {
    idToken: string;
    name: string;
  };
};

export type TokenInfo = {
  accessToken: string;
  refreshToken: string;
};
export type AuthResponse = { memberId: number; isCompletedOnboarding: boolean; tokenInfo: TokenInfo };

export type AuthReissueResponse = TokenInfo;
