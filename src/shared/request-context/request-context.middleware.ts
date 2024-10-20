import { NextFunction, Request, Response } from 'express';
import RequestContext from '#shared/request-context/request-context';

/*
 * This middleware is responsible for setting the request context.
 */
const requestContextMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const headers = req.headers as Record<string, string>;
  const context = RequestContext.getInstance();
  context.reset(headers);
  next();
};

export default requestContextMiddleware;
