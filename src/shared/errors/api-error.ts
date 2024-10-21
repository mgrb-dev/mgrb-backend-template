/**
 * Custom error class to handle API-specific errors.
 * Extends the native Error class to include HTTP status codes and optional metadata.
 */
export class ApiError extends Error {
  /**
   * Creates a new instance of ApiError.
   * @param message - The error message describing the issue.
   * @param httpStatus - The HTTP status code associated with the error.
   * @param metadata - Optional additional metadata to provide context about the error.
   */
  constructor(
    message: string,
    readonly httpStatus: number,
    readonly metadata?: Record<string, unknown>,
  ) {
    super(message);

    this.name = this.constructor.name;

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
