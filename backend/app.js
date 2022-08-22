const dotenv = require("dotenv");
const moongoes = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

//GETTING ENV
dotenv.config({ path: "./config.env" });
//requiring database connection from another componeets
require("./db/connection");
app.use(express.json());
app.use(cookieParser());
//requiring our route
app.use(require("./router/auth"));
// const User = require("./model/userSchema");
//middleware
//middle ware have three parameters res req next
const middleware = (req, res, next) => {
  next();
};

app.get("/verify", middleware, (req, res) => {
  res.send("Hello login home");
});
app.get("/onbording", (req, res) => {
  res.cookie("cookie", "token");
  res.send("Hello onbording home");
});
app.listen(9000, () => {
  console.log("====================================");
  console.log(`server is running`);
  console.log("====================================");
});
