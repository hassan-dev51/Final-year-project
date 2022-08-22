const mongoose = require("mongoose");

const mpaSchema = mongoose.Schema({
  cnic: {
    type: Number,
    required: true,
  },
  party: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cityname: {
    type: String,
    required: true,
  },
});

const MPA = mongoose.model("MPA", mpaSchema);
module.exports = MPA;
