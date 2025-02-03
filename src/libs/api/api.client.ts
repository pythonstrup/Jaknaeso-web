import { BaseApi } from '@/utils/modules/api.client';

export const clientApi = new BaseApi({
  baseUrl: process.env.MAIN_HOST || '',
}).axiosInstance;
