import Sequelize from 'sequelize';

export default new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    dialect: 'postgres',
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    loggin: false,
  }
);
