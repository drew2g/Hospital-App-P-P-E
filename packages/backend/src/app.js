import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
app
  .use(cors())
  .options('*', cors())
  .use(bodyParser.json())
  .use(express.static(path.resolve('public')))
  .use(routes);

process.on('SIGINT', (sig) => {
  process.exit(sig === 130 ? 0 : sig);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

export default app;
