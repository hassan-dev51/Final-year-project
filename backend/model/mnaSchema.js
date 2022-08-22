const mongoose = require("mongoose");

const mnaSchema = mongoose.Schema({
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

const MNA = mongoose.model("MNA", mnaSchema);
module.exports = MNA;
