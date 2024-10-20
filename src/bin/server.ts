import { Application, Request, Response } from 'express';
import bootstrap from '#api';
import cartRouter from '#api/routers/cart.router';
import openApiRouter from '#api/openapi/openapi.router';
import { getCartController } from '#api/inject/controllers';
import errorHandlerMiddleware from '#shared/error-handler/error-handler.middleware';

const app: Application = bootstrap();
app.use(openApiRouter());
app.use(cartRouter(getCartController()));

app.get('/health', (_req: Request, res: Response) => {
  res.send('Server is running!');
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
});
app.use(errorHandlerMiddleware);

export default app;
