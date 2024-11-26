const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    bio: {
      type: String,
      required: false,
      unique: false,
    },
    profilePictureUrl: {
      type: String,
      required: false,
      unique: false,
    },
    birthday: {
      type: Date,
      required: true,
      unique: false,
    },
    gender: {
      type: String,
      required: false,
      unique: false,
    },
    netAuraScore: {
      type: Number,
      required: true,
      unique: false,
      default: 0,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
