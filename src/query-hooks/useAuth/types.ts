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

export type AuthResponse = { memberId: number; accessToken: string; refreshToken: string };
