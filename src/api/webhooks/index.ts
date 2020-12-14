import { Router } from 'express';
import gitlabPipeline from './gitlab-pipeline';

const router = Router();
export default router;

router.post('/gitlab/pipeline', (req, res) => {
  gitlabPipeline(req.body);
  res.send(200);
});
