const express = require('express');
const debug = require('debug')('index');
require('dotenv').config();
const mongoose = require('mongoose');

const mongodb = process.env.MONGO_DB || 'test';
const mongourl = process.env.MONGO_URL || 'mongodb://localhost:27017/';
const swaggerUi = require('swagger-ui-express');
const { swagger } = require('./swagger-init.js');

mongoose.set('useUnifiedTopology', true); // get rid of that pesky fkn error
mongoose.connect(mongourl + mongodb, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const app = express();
const port = process.env.PORT || 8001;
const routes = require('./src/routes/main.js');

app.use('/swagger', swaggerUi.serve);
app.get('/swagger', swaggerUi.setup(swagger(port)));

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
  
  app.use(routes);
  app.listen(port, () => debug(`HOSPITAL Server on port: ${port}!`));