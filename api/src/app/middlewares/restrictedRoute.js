import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../../config/auth";

/**
 * Authorization Middleware.
 * This middleware checks the authorization header for the Bearer token.
 * If the token is valid, the user ID is added to request.
 */
export default async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.send(401, { message: "Access token is missing." });
  }

  const [, token] = authHeader.split(" ");
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // Include the user ID in the request.
    req.userId = decoded.id;

    return next();
  } catch (err) {
    console.log(err);
    return res.send(401, { message: "Access token is invalid." });
  }
};
