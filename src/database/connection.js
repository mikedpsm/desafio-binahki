const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

//connectionString: process.env.DATABASE_URL || 'postgresql://postgres:@localhost:5000/', ssl: process.env.DATABASE_URL ? true : false

module.exports = knex;
