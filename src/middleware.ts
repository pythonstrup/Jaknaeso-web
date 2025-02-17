import { type NextRequest, NextResponse } from 'next/server';

import { getAccessToken, getIsCompletedOnboarding } from './libs/cookie/manageCookie.server';

export async function middleware(request: NextRequest) {
  const accessToken = await getAccessToken();
  const isCompletedOnboarding = await getIsCompletedOnboarding();
  const currentPath = request.nextUrl.pathname;
  if (!accessToken && currentPath !== '/login') {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  if (accessToken && !isCompletedOnboarding && currentPath !== '/onboarding') {
    return NextResponse.redirect(new URL('/onboarding', request.nextUrl));
  }

  if (accessToken && isCompletedOnboarding && currentPath === '/onboarding') {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/mypage',
    '/report/analysis',
    '/report/questions',
    '/game',

    '/mypage/:path+',
    '/report/analysis/:path+',
    '/report/questions/:path+',
    '/game/:path+',
  ],
};
