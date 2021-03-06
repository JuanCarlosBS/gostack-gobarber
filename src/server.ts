import express, { json } from 'express';

import routes from './routes';

const app = express();

app.use(json());
app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server started: http://localhost:3333');
});
