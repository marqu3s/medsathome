import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import "../../database/index";
import Account from "../models/Account";

class AccountController {
  /**
   * Function to handle errors.
   * It could be used to log them to a file or a monitoring tool.
   * @param {*} err
   */
  static handleError(err) {
    console.log(err);
  }

  /**
   * Generates a JWT token.
   *
   * @param {integer} accountId
   *
   * @returns string
   */
  static generateToken(accountId) {
    return jwt.sign(
      { id: accountId },
      "235f60dd11c19aed8fb63f61c5e485d42e365678",
      { expiresIn: "7d" }
    );
  }

  /**
   * Register a new account.
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  register(req, res, next) {
    const { body } = req;

    // Encrypt the password.
    body.password = bcrypt.hashSync(body.password, 8);

    // Create the new account.
    const account = new Account(body);
    account.save(function(err, newModel) {
      if (err) {
        let { message } = err;
        if (err.message.indexOf("duplicate key error") !== -1) {
          message = "The email provided is already in use.";
        }
        res.send(400, { auth: false, message });

        return AccountController.handleError(err);
      }

      // Saved!
      const token = AccountController.generateToken(newModel.id);
      res.send(200, { auth: true, token });
    });
  }

  /**
   * Authenticates an email and password and return a token to be used in every
   * request to the API.
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  auth(req, res, next) {
    const { email, password } = req.body;

    Account.findOne({ email }, function(err, account) {
      if (err) {
        const { message } = err;
        res.send(400, { auth: false, message });

        return AccountController.handleError(err);
      }

      if (account === null || !bcrypt.compareSync(password, account.password)) {
        res.send(401, {
          auth: false,
          message: "Authorization information is missing or invalid."
        });

        return AccountController.handleError(err);
      }

      // Authorized!
      const token = AccountController.generateToken(account.id);
      res.send(200, { auth: true, token });
    });
  }
}

export default new AccountController();
