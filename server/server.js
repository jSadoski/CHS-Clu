const express = require("express");
const router = require("./routes");
const path = require("path");
var cors = require("cors");

const api = {};

api.start = async (dserver, port) => {
  const app = express();
  app.use(express.json()); // for parsing type=application/json

  app.use(cors());

  // serve static directory
  app.use(express.static("static"));

  // init router with discord server reference
  const routes = router.setserver(dserver);
  app.use("/", routes);

  await app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    console.log(`Targeting server ${dserver.name} (${dserver.id})`);
  });
  return app;
};

module.exports = api;
