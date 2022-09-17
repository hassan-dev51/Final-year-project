const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  cnic: {
    type: Number,
    required: true,
  },
  party: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  seat: {
    type: String,
    required: true,
  },
  selectedFile: String,
});

const CANDIDATE = mongoose.model("CANDIDATE", candidateSchema);
module.exports = CANDIDATE;
