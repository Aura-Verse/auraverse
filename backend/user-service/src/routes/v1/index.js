const express = require("express");

const {
  signup,
  signIn,
  isAuthenticated,
} = require("../../controllers/auth-controller");
const { AuthRequestValidatorMiddleware } = require("../../middlewares/index");

const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidatorMiddleware.validateUserSignup,
  signup
);
router.post(
  "/signin",
  AuthRequestValidatorMiddleware.validateUserSignIn,
  signIn
);

router.get("/isAuthenticated", isAuthenticated);

module.exports = router;
