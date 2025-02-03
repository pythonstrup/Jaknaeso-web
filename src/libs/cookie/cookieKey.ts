export const enum CookieKey {
  'accessToken' = 'accessToken',
  'refreshToken' = 'refreshToken',
}
export type TCookieKey = keyof typeof CookieKey;
