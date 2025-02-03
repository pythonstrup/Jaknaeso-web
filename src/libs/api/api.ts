import { BaseApi } from '@/utils/modules/api';

export const withoutTokenApi = new BaseApi({
  baseUrl: process.env.MAIN_HOST || '',
}).axiosInstance;
