const User = require("../models/user.js");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong on repo layer");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const result = await User.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("something went wrong on repo layer");
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await User.findById(id);
      return result;
    } catch (error) {
      console.log("something went wrong on repo layer");
      throw error;
    }
  }

  async getByUsername(username) {
    try {
      const user = await User.findOne({ username: username });
      return user;
    } catch (error) {
      console.log("something went wrong on repo layer");
      throw error;
    }
  }

  // async getById(id) {
  //   try {
  //     const user = await User.findOne({ id: id });
  //     return user;
  //   } catch (error) {
  //     console.log("something went wrong on repo layer");
  //     throw error;
  //   }
  // }

  async getAll() {
    try {
      const result = await User.find({});
      return result;
    } catch (error) {
      console.log("something went wrong on repo layer");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const result = await User.findByIdAndUpdate(id, data, { new: true });
      return result;
    } catch (error) {
      console.log("something went wrong on repo layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
