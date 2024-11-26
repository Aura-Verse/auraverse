const UserRepository = require("../repository/user-repository");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    const user = await this.userRepository.create(data);
    return user;
  }

  async signIn(username, plainPassword) {
    try {
      const user = await this.userRepository.getByUsername(username);
      const passwordMatch = this.checkPassword(plainPassword, user.password);
      if (!passwordMatch) {
        console.log("password doesn't match");
        throw { error: "Incorrect password" };
      }
      const newJWT = this.createToken({ username: user.username, id: user.id });
      return newJWT;
    } catch (error) {
      console.log("something went wrong in sign in process");
      throw error;
    }
  }

  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);
      if (!response) {
        throw { error: "invalid token" };
      }
      const user = this.userRepository.getByUsername(response.username);
      if (!user) {
        throw { error: "no user with the corresponding token exists" };
      }
      return user.username;
    } catch (error) {
      console.log("something went wrong in auth process");
      throw error;
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return result;
    } catch (error) {
      console.log("something wrong in token creation");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("something wrong in token validation", error);
      throw error;
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("something wrong in password validation");
      throw error;
    }
  }
}

module.exports = UserService;
