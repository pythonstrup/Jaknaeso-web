import type { Route } from 'next';

export const ROUTES = {
  home: '/',
  login: '/login',
  report: '/report',
  reportAnalysis: '/report/analysis',
  reportQuestions: '/report/questions',
  mypage: '/mypage',
  game: '/game',
  gameComplete: '/game/complete',
  term: '/term',
} as const;

// TODO : 추후에 슬라이더/이중택일 쿼리 적용
export const GAME_ROUTES = {
  slider: '?type=slider' as Route,
  doubleChoice: '?type=doubleChoice' as Route,
} as const;
