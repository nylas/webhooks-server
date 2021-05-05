require("dotenv").config();
const express = require("express");

const app = express();
const webhookRouter = require("./WebhookLogs/router");
const PORT = process.env.PORT || 4000;

app.use(async (req, res, next) => {
  req.rawBody = "";
  req.on("data", (chunk) => (req.rawBody += chunk));
  req.on("error", (err) => res.status(500).send(err));

  req.on("end", async () => {
    // because the stream has been consumed, other parsers like bodyParser.json
    // cannot stream the request data and will time out so we must explicitly parse the body
    try {
      req.body = await JSON.parse(req.rawBody);
      next();
    } catch (err) {
      res.status(500).send("Error parsing body");
    }
  });
});

app.use(webhookRouter);

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT} !!!`);
});
