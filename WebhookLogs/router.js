const { Router } = require("express");
const router = new Router();
const verifyNylasRequest = require("./verifyNylasRequest");

// Nylas will check to make sure your webhook is valid by making a GET
// request to your endpoint with a challenge parameter when you add the
// endpoint to the developer dashboard.  All you have to do is return the
// value of the challenge parameter in the body of the response.
router.get("/webhook", async (req, res, next) => {
  try {
    const challenge = await req.query.challenge;
    return res.status(200).send(challenge);
  } catch (error) {
    next(error);
  }
});

router.post("/webhook", async (req, res, next) => {
  try {
    if (!verifyNylasRequest(req)) {
      return res.status(401).send("X-Nylas-Signature failed verification 🚷 ");
    }
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
  // This is the place where you want to edit on what deltas data you want to see on heroku logs.
  // Uncomment the below if you want to see the deltas Object on your heroku logs --tail
  const data = await req.body;
  console.log(JSON.stringify(data, null, 2));
});

module.exports = router;
