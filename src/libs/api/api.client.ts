import { BaseApi } from '@/utils/modules/api.client';

export const clientApi = new BaseApi({
  baseUrl: process.env.SERVER_HOST || '',
}).axiosInstance;
