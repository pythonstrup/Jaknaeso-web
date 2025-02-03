export type AuthParams = {
  post: {
    code: string;
    redirectUri: string;
  };
};

export type AuthResponse = { memberId: number; accessToken: string; refreshToken: string };
