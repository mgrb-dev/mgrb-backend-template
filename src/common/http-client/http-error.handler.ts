/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';
import { ApiError } from '#common/errors/api-error';
import logger from '#common/logger/logger';
import { AppContext } from '#common/middlewares/request-context/request-context';

/**
 * Handles HTTP errors by logging the error and returning an empty response.
 * @param fn - The function that returns a Promise.
 * @returns The result of the function or an empty object if an error occurs.
 */

export async function handleHttpErrorAndReturnEmpty<T>(
  fn: () => Promise<T>,
): Promise<T | undefined> {
  try {
    return await fn();
  } catch (error: any) {
    const context = AppContext.getInstance().getContext();
    if (axios.isAxiosError(error)) {
      logger.warn(
        {
          baseURL: error.config?.baseURL,
          url: error.config?.url,
          method: error.config?.method,
          response: error.response?.data,
          status: error.response?.status,
          ...context,
        },
        error.message,
      );
    } else {
      logger.warn({
        ...error,
        ...context,
      });
    }
    return undefined;
  }
}

/**
 * Handles HTTP errors by throwing an ApiError.
 * @param fn - The function that returns a Promise.
 * @throws ApiError
 */
export async function handleHttpErrorAndThrow<T>(
  fn: () => Promise<T>,
): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw ApiError.fromAxiosError(error);
    } else {
      throw ApiError.fromError(error, {
        ...AppContext.getInstance().getContext(),
      });
    }
  }
}
