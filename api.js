const express = require("express");
const router = require("./routes");

const api = {};

api.start = (dserver, port) => {
  const app = express();
  app.use(express.json()); // for parsing type=application/json

  routes = router.setserver(dserver);
  app.use("/", routes);
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
  return app;
};

module.exports = api;
