import { deleteCookie, getCookie, setCookie } from 'cookies-next';

import type { TCookieKey } from './cookieKey';
import { CookieKey } from './cookieKey';

/**
 * 쿠키에서 아이템을 가져옴
 */
const getItemOrNull = async <T>(key: TCookieKey): Promise<T | null> => {
  try {
    const data = getCookie(key);
    return data ? (data as T) : null;
  } catch (error) {
    return null;
  }
};

/**
 * 쿠키에 아이템을 저장
 */
const setItem = <T>(key: TCookieKey, items: T) => {
  try {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    setCookie(key, items, { expires: date });
  } catch (error) {
    // TODO: log 파일에 저장
  }
};

/**
 * refresh token 값을 가져옴
 */
export const getRefreshToken = async () => {
  return getItemOrNull<string>(CookieKey.refreshToken);
};

/**
 * refresh token 값을 갱신
 */
const setRefreshToken = (refreshToken: string) => {
  setItem<string>(CookieKey.refreshToken, refreshToken);
};

/**
 * access token 값을 가져옴
 */
export const getAccessToken = async () => {
  return getItemOrNull<string>(CookieKey.accessToken);
};

/**
 * access token 값을 갱신
 */
const setAccessToken = (accessToken: string) => {
  setItem<string>(CookieKey.accessToken, accessToken);
};

/**
 * access token, refresh token 값 넣어줌
 */
export const setTokens = (accessToken: string, refreshToken: string) => {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};

/**
 * memberId token 값을 가져옴
 */
export const getMemberIdToken = async () => {
  return getItemOrNull<string>(CookieKey.memberId);
};

/**
 * memberId token 값을 갱신
 */
export const setMemberIdToken = (memberId: string) => {
  setItem<string>(CookieKey.memberId, memberId);
};

/**
 * bundleId token 값을 가져옴
 */
export const getBundleIdToken = async () => {
  return getItemOrNull<string>(CookieKey.bundleId);
};

/**
 * bundleId token 값을 갱신
 */
export const setBundleIdToken = (bundleId: string) => {
  setItem<string>(CookieKey.bundleId, bundleId);
};

/**
 * token 값 삭제
 */
export const clearTokens = () => {
  deleteCookie(CookieKey.accessToken);
  deleteCookie(CookieKey.refreshToken);
  deleteCookie(CookieKey.memberId);
  deleteCookie(CookieKey.bundleId);
};
