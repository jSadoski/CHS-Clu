const express = require("express");
const router = require("./routes");
const path = require("path");
var cors = require("cors");

module.exports = async (dserver, db, port) => {
  const app = express();
  app.use(express.json()); // for parsing type=application/json

  app.use(cors());

  // serve static directory
  app.use(express.static("static"));

  // init router with discord server reference
  const routes = router.setserver(dserver, db);
  app.use("/", routes);

  const http = await app.listen(port, () => {
    console.log(
      `App listening at http://localhost:${port}\nTargeting server ${dserver.name} (${dserver.id})`
    );
  });

  return http;
};
