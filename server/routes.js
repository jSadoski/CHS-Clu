const express = require("express");
const router = express.Router();

router.setserver = (dserver) => {
  /* / */
  router.get("/", (req, res) => {
    res.send(`Serving on ${dserver.name}`);
  });

  /* channels */
  router.get("/channels", (req, res) => {
    res.json(dserver.channels.cache.array());
  });

  /* message */
  router.post("/message", (req, res, next) => {
    dserver.channels.cache
      .get(req.body.channel)
      .send(req.body.message)
      .then((pr) => res.send(pr))
      .catch((err) => res.send(err.message));
  });

  /* polls */
  router.post("/poll", (req, res) => {
    dserver.channels.cache
      .get(req.body.channel)
      .send(req.body.poll)
      .then((pr) => {
        res.send(pr);

        const filter = (reaction, user) => {
          return reaction.emoji.name === "👍";
        };

        pr.awaitReactions(filter, {
          time: 15000,
        })
          .then((collected) => console.log(collected))
          .catch((err) => console.log(err.message));
      })
      .catch((err) => res.send(err.message));
  });

  return router;
};

module.exports = router;
