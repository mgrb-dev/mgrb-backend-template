import type { InternalAxiosRequestConfig } from 'axios';
import { AppContext } from '#common/middlewares/request-context/request-context';

export function headerInterceptor(
  request: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  const headers = request.headers;
  const ctx = AppContext.getInstance().getContext();

  if (ctx?.headers) {
    Object.entries(ctx.headers).forEach(([key, value]) => {
      if (value !== undefined && !request.headers[key]) {
        headers[key] = value;
      }
    });
  }

  request.headers = headers;
  return request;
}
