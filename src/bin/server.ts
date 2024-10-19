import { Application, Request, Response } from 'express';
import bootstrap from '#api';
import cartRouter from '#api/routers/cart.router';
import { getCartController } from '#api/inject/controllers';

const app: Application = bootstrap();

app.use(cartRouter(getCartController()));
app.get('/health', (req: Request, res: Response) => {
  res.send('Server is running!');
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
});

export default app;
