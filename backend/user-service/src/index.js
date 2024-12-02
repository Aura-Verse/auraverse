const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const connect = require("./config/database.js");
const apiRoutes = require("./routes/index.js");
const User = require("./models/user.js");
// const UserService = require("./services/user-service.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`server started at port:${PORT}`);
  await connect();
  console.log(`db connected`);
  // const service = new UserService();
  // const newtoken = service.createToken({
  //   email: "mohit@1.com",
  //   id: "674562cdd2e1c3acf2fc4e08",
  // });
  // console.log("new token is: ", newtoken);

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vaGl0QDEuY29tIiwiaWQiOiI2NzQ1NjJjZGQyZTFjM2FjZjJmYzRlMDgiLCJpYXQiOjE3MzI2MDY0MzEsImV4cCI6MTczMjYxMDAzMX0.lyy_gFZRZDeePJfp9Q7yvrQqerdzGEZwJ_HgZ078D4c";
  // const resp = service.verifyToken(token);
  // console.log(resp);
  // const user2 = await User.create({
  //   username: "BabuMahto",
  //   email: "babuMahto@shaurya.com",
  //   password: "12345",
  //   birthday: new Date("1990-06-15"),
  //   bio: "hey there",
  //   gender: "others",
  // });
  // console.log(user2);
});
