const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verify = jwt.verify(token, process.env.SECRETE_KEY);
    const rootUser = await User.findOne({
      _id: verify._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("user not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (eror) {
    console.log("====================================");
    console.log("unauthroized access");
    console.log(eror);
    console.log("====================================");
    res.status(401).send("unauthroized access").json();
  }
};

module.exports = authenticate;
