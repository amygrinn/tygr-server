import useAuth, { cors } from '@tygr/auth-server';
import * as dotenv from 'dotenv';
import express from 'express';
import { Users } from './models';

dotenv.config();

const [authMiddleware, authRouter] = useAuth({
  Users,
  secret: process.env.SECRET!,
  async sendCode(email, code) {
    console.log('Sending reset code', email, code);
  },
  delay: 1000,
  authBaseUrl: process.env.AUTH_BASE_URL!,
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  },
  github: {
    clientID: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  },
  twitter: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY!,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET!,
  },
});

const app = express();
app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  cors(
    'https://tygr.info',
    'https://tylergrinn.github.io',
    'http://10.0.0.3:8081',
    'http://localhost:8081'
  ),
  authMiddleware
);

app.use('/auth', authRouter);

export default app;
