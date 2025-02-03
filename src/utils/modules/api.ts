import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';

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

  constructor({ baseUrl, options }: AxiosInstanceParams) {
    this._axiosInstance = axios.create({ baseURL: baseUrl, ...options });
    this.registerResponseInterceptor();
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
   * Register a response interceptor for the axios instance.
   * @param {ResponseInterceptorOptions} options - The options for the response interceptor.
   */
  registerResponseInterceptor(
    onFulfilled: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse> = this.handleResponseFulFilled,
    onRejected: (error: AxiosError) => Promise<AxiosError> = this.handleResponseRejected,
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
  private handleResponseRejected(error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
  }
}
