import { BaseApi } from '@/utils/modules/api.server';

export const serverApi = new BaseApi({
  baseUrl: process.env.SERVER_HOST || '',
}).axiosInstance;
