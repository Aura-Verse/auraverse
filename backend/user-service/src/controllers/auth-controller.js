const UserService = require("../services/user-service");

const userService = new UserService();

const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      birthday: req.body.birthday,
      bio: req.body.bio,
      gender: req.body.gender,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully created a new User",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong at controller",
      data: {},
      success: false,
      error: error,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.username,
      req.body.password
    );
    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "successfully signed in",
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong at controller",
      data: {},
      success: false,
      error: error,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(200).json({
      success: true,
      err: {},
      data: response,
      message: "user is authenticated and token is valid",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "something went wrong at controller",
      data: {},
      success: false,
      error: error,
    });
  }
};

module.exports = { signup, signIn, isAuthenticated };
