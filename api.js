const express = require("express");
const router = require("./routes");
const path = require("path");

const api = {};

api.start = (dserver, port) => {
  const app = express();
  app.use(express.json()); // for parsing type=application/json

  // serve static directory
  app.use(express.static("static"));

  // serve admin client on root
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/adminclient/index.html"));
  });

  // init router with discord server reference
  const routes = router.setserver(dserver);
  app.use("/api", routes);

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
  return app;
};

module.exports = api;
