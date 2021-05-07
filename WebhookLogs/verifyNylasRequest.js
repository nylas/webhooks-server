const crypto = require("crypto");
const NYLAS_CLIENT_SECRET = process.env.NYLAS_CLIENT_SECRET;

// Each request made by Nylas includes an X-Nylas-Signature header. The header
// contains the HMAC-SHA256 signature of the request body, using your client
// secret as the signing key. This allows your app to verify that the
// notification really came from Nylas.
const verifyNylasRequest = async (req, next) => {
  try {
    const digest = await crypto
      .createHmac("sha256", NYLAS_CLIENT_SECRET)
      .update(req.rawBody)
      .digest("hex");
    return digest === req.get("x-nylas-signature");
  } catch (error) {
    next(error);
  }
};

module.exports = verifyNylasRequest;
