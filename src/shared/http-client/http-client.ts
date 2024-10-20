import Axios, { AxiosInstance } from 'axios';
import { ApiError } from '#shared/api-error';

export type HttpClientOptions = {
  baseURL: string;
  timeout: number;
};

export abstract class BaseHttpClient {
  protected readonly instance: AxiosInstance;

  constructor(options: HttpClientOptions) {
    if (!options.baseURL) {
      throw new ApiError('baseUrl required', 500);
    }
    this.instance = Axios.create({
      baseURL: options.baseURL,
      timeout: options.timeout,
    });

    //TODO headers interceptor
  }
}
