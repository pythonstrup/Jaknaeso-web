import { NextResponse } from 'next/server';
// import { serverApi } from '../../../libs/api/server';

const MOCK_DATA = [
  { id: 1, user: '배서영' },
  { id: 2, user: '한수민' },
];

export async function GET() {
  // const res = serverApi.get('/')
  //const data = await res.json();
  // return Response.json({ data })
  const data = MOCK_DATA;

  return NextResponse.json(data);
}
