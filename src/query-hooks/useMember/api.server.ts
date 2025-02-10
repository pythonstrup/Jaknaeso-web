import { serverApi } from '@/libs/api/api.server';
import type { ResponseDTO } from '@/types';

import type { MemberResponse } from './types';

const get = async (memberId: number) => {
  const res = await serverApi.get<ResponseDTO<MemberResponse>>(`/api/v1/members/${memberId}`);
  return res.data.data;
};

const memberServerApis = { get };

export default memberServerApis;
