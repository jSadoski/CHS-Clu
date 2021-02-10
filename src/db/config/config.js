module.exports = {
  development: {
    username: "root",
    password: null,
    database: "database_development",
    dialect: "sqlite",
    storage: "./database_development.db",
  },
  test: {
    username: "root",
    password: null,
    database: "database_testing",
    dialect: "sqlite",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: process.env["DATABASE_URL"],
    dialect: "postgres",
  },
};
