import path from 'path';
// import swaggerUi from 'swagger-ui-express';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

// const swaggerDoc = require('../swagger.json');

// const port = process.env.PORT || 8001;

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

// if (process.env.NODE_ENV === 'development') {
//   app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
// }

export default app;
