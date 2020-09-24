import * as dotenv from 'dotenv';
import express from 'express';
import { auth, pushRouter } from './api';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth.router);
app.use('/push', auth.verify(false), pushRouter);

export default app;
