const validateUserSignup = (req, res, next) => {
  if (!req.body.email || !req.body.username || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "Email or password or username is missing in request",
    });
  }
  next();
};

const validateUserSignIn = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "password or username is missing in request",
    });
  }
  next();
};

module.exports = {
  validateUserSignIn,
  validateUserSignup,
};
