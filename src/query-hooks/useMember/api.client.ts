import { clientApi } from '@/libs/api/api.client';
import type { ResponseDTO } from '@/types';

import type { MemberResponse } from './types';

const get = async (memberId: number) => {
  const res = await clientApi.get<ResponseDTO<MemberResponse>>(`/api/v1/members/${memberId}`);
  return res.data.data;
};

const memberApis = { get };

export default memberApis;
