export class ApiError extends Error {
  constructor(
    message: string,
    readonly httpStatus: number,
    readonly metadata?: Record<string, any>
  ) {
    super(message);
    this.httpStatus = httpStatus;
    this.metadata = metadata;
  }
}
