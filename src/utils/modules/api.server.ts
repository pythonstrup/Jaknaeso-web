import type { InternalAxiosRequestConfig } from 'axios';
import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';

import { ROUTES } from '@/constants';
import { getAccessToken, getRefreshToken } from '@/libs/cookie/manageCookie.server';
import authApis from '@/query-hooks/useAuth/api';
import type { ResponseErrorAPI } from '@/types';

interface AxiosInstanceParams {
  baseUrl: string;
  options?: AxiosRequestConfig;
}

// interface ResponseInterceptorOptions {
//   onFulfilled: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
//   onRejected: (error: AxiosError) => Promise<AxiosError>;
// }

export class BaseApi {
  private _axiosInstance: AxiosInstance;
  private lock = false;
  constructor({ baseUrl, options }: AxiosInstanceParams) {
    this._axiosInstance = axios.create({ baseURL: baseUrl, ...options });
    this.registerResponseInterceptor();
    this.registerRequestInterceptor();
  }

  /**
   * Get the axios instance.
   * @type {AxiosInstance}
   */
  get axiosInstance(): AxiosInstance {
    return this._axiosInstance;
  }

  /**
   * Update the options for the axios instance.
   * @param {AxiosRequestConfig} newOptions - The new options for the axios instance.
   */
  // updateOptions(newOptions: AxiosRequestConfig): void {
  //   this._axiosInstance.defaults = {
  //     ...this._axiosInstance.defaults,
  //     ...newOptions,
  //   };
  // }

  /**
   * Send a GET request.
   * @param {string} url - The URL for the request.
   * @param {AxiosRequestConfig} options - The options for the request.
   * @returns {Promise<AxiosResponse>} A promise that resolves to the response of the request.
   */
  async get<T>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this._axiosInstance.get<T>(url, options);
  }

  /**
   * Send a POST request.
   * @param {string} url - The URL for the request.
   * @param {any} data - The data to be sent as the request body.
   * @param {AxiosRequestConfig} options - The options for the request.
   * @returns {Promise<AxiosResponse>} A promise that resolves to the response of the request.
   */
  async post<T>(url: string, data: any, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this._axiosInstance.post<T>(url, data, options);
  }

  /**
   * Send a PUT request.
   * @param {string} url - The URL for the request.
   * @param {any} data - The data to be sent as the request body.
   * @param {AxiosRequestConfig} options - The options for the request.
   * @returns {Promise<AxiosResponse>} A promise that resolves to the response of the request.
   */
  async put<T>(url: string, data: any, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this._axiosInstance.put<T>(url, data, options);
  }

  /**
   * Send a DELETE request.
   * @param {string} url - The URL for the request.
   * @param {AxiosRequestConfig} options - The options for the request.
   * @returns {Promise<AxiosResponse>} A promise that resolves to the response of the request.
   */
  async delete<T>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this._axiosInstance.delete<T>(url, options);
  }

  /**
   * Register a request interceptor to attach authorization tokens.
   */
  private registerRequestInterceptor(): void {
    this._axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const accessToken = await getAccessToken();
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }

  /**
   * Register a response interceptor for the axios instance.
   * @param {ResponseInterceptorOptions} options - The options for the response interceptor.
   */
  registerResponseInterceptor(
    onFulfilled: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse> = this.handleResponseFulFilled,
    onRejected: (error: AxiosError<ResponseErrorAPI>) => Promise<AxiosResponse> = this.handleResponseRejected,
  ): void {
    this._axiosInstance.interceptors.response.use(onFulfilled, onRejected);
  }

  /**
   * Handle the fulfilled response.
   * @private
   * @param {AxiosResponse} response - The response object.
   * @returns {AxiosResponse} The response object.
   */
  private handleResponseFulFilled(response: AxiosResponse): AxiosResponse {
    return response;
  }

  /**
   * Handle the rejected response.
   * @private
   * @param {AxiosError} error - The error object.
   * @returns {Promise<AxiosError>} A rejected promise with the error object.
   */
  private async handleResponseRejected(error: AxiosError<ResponseErrorAPI>): Promise<AxiosResponse> {
    const originalConfig = error.config;
    console.log('reject');
    if (originalConfig && error.response?.data.error.code === 'E4011' && !this.lock) {
      this.lock = true;
      try {
        const refreshToken = await getRefreshToken();
        const accessToken = await authApis.reissue(refreshToken as string);
        if (accessToken) {
          return await axios
            .request({
              ...originalConfig,
              headers: { Authorization: `Bearer ${accessToken}` },
            })
            .finally(() => {
              this.lock = false;
            });
        }
        this.lock = false;
        window.location.href = ROUTES.login;
      } catch (err) {
        window.location.href = ROUTES.login;
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
}
