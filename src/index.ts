import app from './app';
import { initSequelize } from './models';

initSequelize().then(() => {
  const { PORT } = process.env;
  // eslint-disable-next-line no-console
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});
