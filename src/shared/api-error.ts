export class ApiError extends Error {
  constructor(
    message: string,
    private readonly code: number,
    private readonly metadata?: Record<string, any>
  ) {
    super(message);
    this.code = code;
    this.metadata = metadata;
  }
}
