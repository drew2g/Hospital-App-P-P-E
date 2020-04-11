import debug from 'debug';
import app from './app';

const message = debug('hit');

app.listen(process.env.PORT, () =>
  message(`HOSPITAL Server on port: ${process.env.PORT}!`, 'app')
);
