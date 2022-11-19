const dotenv = require("dotenv");
const moongoes = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");

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
// file upload
const fileUpload = require("express-fileupload");
const cors = require("cors");
const morgan = require("morgan");
const _ = require("lodash");

// enable files upload
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.post("/upload-avatar", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let avatar = req.files.avatar;

      //Use the mv() method to place the file in the upload directory (i.e. "uploads")
      avatar.mv("../public/" + avatar.name);

      //send response
      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: avatar.name,
          mimetype: avatar.mimetype,
          size: avatar.size,
          imgURL: `http://localhost:3000/${avatar.name}`,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

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
