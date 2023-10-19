if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = {
  development: {
    dialect: 'postgres',
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: 5432,
    logging: false,
    dialectOptions: {
      project: process.env.ENDPOINT_ID,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    dialect: 'postgres',
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: 5432,
    logging: false,
    dialectOptions: {
      project: process.env.ENDPOINT_ID,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

module.exports = config;
