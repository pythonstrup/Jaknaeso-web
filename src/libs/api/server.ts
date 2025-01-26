import { BaseApi } from '@/utils/modules/api';

export const serverApi = new BaseApi({
  baseUrl: process.env.SERVER_HOST || '',
}).axiosInstance;
