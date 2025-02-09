import { clientApi } from '@/libs/api/api.client';

const withdraw = async (memberId: number) => {
  await clientApi.delete(`/api/v1/members/${memberId}`);
};

const memberApis = { withdraw };

export default memberApis;
