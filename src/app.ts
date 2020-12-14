import useAuth, { cors } from '@tygr/auth-server';
import * as dotenv from 'dotenv';
import express from 'express';
import apiRouter from './api';
import { sendCode } from './mail/send-code';
import { Users } from './models';

dotenv.config();

const [authMiddleware, authRouter] = useAuth({
  Users,
  sendCode,
});

const app = express();
app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  cors(),
  authMiddleware
);

app.use('/auth', authRouter);
app.use(apiRouter);

export default app;
