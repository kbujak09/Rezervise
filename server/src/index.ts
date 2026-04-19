import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

import businessRouter from './routes/business.routes';
import appointmentRouter from './routes/appointment.routes';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'OK' });
});

app.use('/api/businesses', businessRouter);
app.use('/api/appointments', appointmentRouter);

app.listen(PORT, () => {
  console.log('Server working!');
})