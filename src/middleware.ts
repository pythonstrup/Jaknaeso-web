import { type NextRequest, NextResponse } from 'next/server';

import { getAccessToken } from './libs/cookie/manageCookie.server';

export async function middleware(request: NextRequest) {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return NextResponse.redirect(new URL(`/login`, request.nextUrl));
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
