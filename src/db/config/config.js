require("dotenv").config();

module.exports = {
  development: {
    host: "localhost",
    dialect: "postgres",
    use_env_variable: "DATABASE_URL",
  },
  test: {
    host: "localhost",
    dialect: "postgres",
    use_env_variable: "DATABASE_URL",
  },
  production: {
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
