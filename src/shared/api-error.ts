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
    readonly metadata?: Record<string, string>,
  ) {
    super(message);

    // Ensure the name of this error is correct in stack traces
    this.name = this.constructor.name;

    // Set the prototype explicitly to support instanceof checks
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
