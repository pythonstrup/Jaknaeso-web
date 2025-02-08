import { clientApi } from '@/libs/api/api.client';

const getTest = async () => {
  try {
    const { data } = await clientApi.get(`/api/test`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const testApis = { getTest };

export default testApis;
