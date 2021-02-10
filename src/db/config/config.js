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
    host: "localhost",
    dialect: "postgres",
    use_env_variable: "DATABASE_URL",
    dialectOptions: {
      // Fixes "SequelizeConnectionError: self signed certificate"
      // https://stackoverflow.com/a/61350416/705296
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
