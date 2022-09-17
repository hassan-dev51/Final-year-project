const jwt = require("jsonwebtoken");
const express = require("express");
const multer = require("multer");
const router = express.Router();
const authenticate = require("../Authenticate/authenticate");

require("../db/connection");
const User = require("../model/userSchema");
const MNA = require("../model/mnaSchema");
const MPA = require("../model/mpaSchema");
const CANDIDATE = require("../model/candidateSchema");

// const Storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: Storage,
//   fileFilter: fileFilter,
// }).single("image");
// ============================================================
// router.post("/candidate", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.log("Eroor");
//     } else {
//       const createCandidate = new CANDIDATE({
//         name: req.body.name,
//         img: {
//           data: req.file.filename,
//           contentType: "image",
//         },
//       });
//       createCandidate
//         .save()
//         .then(() => res.send("succuee"))
//         .catch(() => res.send("failure"));
//     }
//   });
// });
router.post("/candidate", async (req, res) => {
  const fetchData = req.body;
  const newFetchData = new CANDIDATE(fetchData);
  try {
    await newFetchData.save();
    res.send(201).json(newFetchData);
    console.log(newFetchData);
  } catch (error) {
    console.log("Error in candidate post");
  }
});
router.get("/candidate", async (req, res) => {
  try {
    const result = await CANDIDATE.find();
    res.send(200).json(result);
  } catch (err) {
    console.log("Error in candidate");
  }
});
// router.post("/candidate", upload, async (req, res) => {
//   const { name, cnic, party, area, seat, img } = req.body;
//   if (!name || !cnic || !party || !area || !seat || !img) {
//     res.status(422).json({ error: "Fill all fields" });
//   }

//   try {
//     const candidate = await CANDIDATE.findOne({ cnic: cnic });
//     if (candidate) {
//       return res.status(424).json({ message: "Registration already Done" });
//     }
//     const createCandidate = new CANDIDATE({
//       name: req.body.name,
//       cnic: req.body.cnic,
//       party: req.body.party,
//       area: req.body.area,
//       seat: req.body.seat,
//       img: {
//         data: req.file.filename,
//         contentType: "image/jpeg",
//       },
//     });
//     const saveCandidate = await createCandidate.save();

//     if (saveCandidate) {
//       return res.status(200).json({ message: "Registration done" });
//     } else {
//       return res.status(500).json({ message: "Failed to cast vote" });
//     }
//   } catch (error) {
//     console.log("error in candidate api");
//   }
// });
// ============================================================//
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
