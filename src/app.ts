import useAuth, { cors } from '@tygr/auth-server';
import * as dotenv from 'dotenv';
import express from 'express';
import { Users } from './models';

dotenv.config();

const [authMiddleware, authRouter] = useAuth({
  Users,
  async sendCode(email, code) {
    console.log('Sending reset code', email, code);
  },
});

const app = express();
app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  cors(),
  authMiddleware
);

app.use('/auth', authRouter);

export default app;
