const jwt = require("jsonwebtoken");
const express = require("express");

const router = express.Router();
const authenticate = require("../Authenticate/authenticate");

require("../db/connection");
const User = require("../model/userSchema");
const MNA = require("../model/mnaSchema");
const MPA = require("../model/mpaSchema");

///mna

router.post("/castvote", async (req, res) => {
  const { cnic, party, name, cityname } = req.body;
  if (!cnic || !name || !party || !cityname) {
    return res.status(422).json({ error: "Please Fill All Credentails" });
  }
  try {
    const voter = await MNA.findOne({ cnic: cnic });
    if (voter) {
      return res.status(422).json({ error: "You have casted your vote" });
    }
    const user = new MNA({ cnic, name, party, cityname });

    const createVoter = await user.save();

    if (createVoter) {
      return res.status(201).json({ message: "Vote casted succussfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Failed to cast vote" });
  }
});
//mpa
router.post("/mpacastvote", async (req, res) => {
  const { cnic, party, name, cityname } = req.body;
  if (!cnic || !name || !party || !cityname) {
    return res.status(422).json({ error: "Please Fill All Credentails" });
  }
  try {
    const newVoter = await MPA.findOne({ cnic: cnic });
    if (newVoter) {
      return res.status(422).json({ error: "You have casted your vote" });
    }
    const newUser = new MPA({ cnic, name, party, cityname });

    const voteCaster = await newUser.save();

    if (voteCaster) {
      return res.status(201).json({ message: "Vote casted succussfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Failed to cast vote" });
  }
});

//
router.post("/register", async (req, res) => {
  const { cnic, name, fname } = req.body;
  if (!cnic || !name || !fname) {
    return res.status(422).json({ error: "Please Fill All Credentails" });
  }
  try {
    const userExist = await User.findOne({ cnic: cnic });
    if (userExist) {
      return res
        .status(424)
        .json({ error: "User already exists at this cnic" });
    }
    const user = new User({ cnic, name, fname });

    const createUser = await user.save();

    if (createUser) {
      return res.status(201).json({ message: "Registration successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Failed to registerd" });
  }
});

//getting data from the user at the time of sign in and validation it
//we are also sending data that why we use post method

router.post("/login", async (req, res) => {
  try {
    let token;
    const { cnic, name, fname } = req.body;
    if (!cnic || !name || !fname) {
      res.status(422).json({ message: "Fill credentail" });
    }

    const userLogin = await User.findOne({ cnic: cnic });
    if (userLogin) {
      token = await userLogin.generateAuthToken();
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 28800000),
        httpOnly: true,
      });
    }
    console.log("====================================");
    console.log(token);
    console.log("====================================");
    if (!userLogin) {
      res.status(400).json({ message: "cnic not found" });
    } else {
      res.status(201).json({ message: "Login Successfully" });
    }
  } catch (error) {
    console.log("================errorr====================");
    console.log(error);
    console.log("====================================");
  }
});

router.get("/onbording", authenticate, (req, res) => {
  console.log("====================================");
  console.log(req.rootUser);
  console.log("===============onbording=====================");
  res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
  console.log("====================================");
  console.log(req.rootUser);
  console.log("===============onbording=====================");
  res.send(req.rootUser);
});

//get data mna

router.get("/castvote", async (req, res) => {
  try {
    const votersMna = await MNA.find();
    res.send(votersMna);
  } catch (e) {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
  }
});

router.get("/mpacastvote", async (req, res) => {
  try {
    const votersMpa = await MPA.find();
    res.send(votersMpa);
  } catch (e) {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
  }
});

module.exports = router;
