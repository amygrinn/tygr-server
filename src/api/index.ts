import { Router } from 'express';
import webhooksRouter from './webhooks';

const router = Router();

export default router;

router.use('/webhooks', webhooksRouter);
