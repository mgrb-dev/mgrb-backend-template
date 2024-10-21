import { NextFunction, Request, Response } from 'express';
import RequestContext from '#shared/middlewares/request-context/request-context';

/**
 * Middleware to set the request context for each incoming request.
 * Extracts headers from the request and initializes the request context.
 * Ensures a unique context is created per request.
 * @param req - The incoming request object.
 * @param _res - The outgoing response object (unused).
 * @param next - The next middleware function in the chain.
 */
function requestContextMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const headers = req.headers as Record<string, string>;
  const context = RequestContext.getInstance();

  context.reset(headers);

  next();
}

export default requestContextMiddleware;
