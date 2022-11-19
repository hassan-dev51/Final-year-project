const mongoose = require("mongoose");

const nomineesSchema = mongoose.Schema({
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
});

const Nominees = mongoose.model("NOMINEES", nomineesSchema);
module.exports = Nominees;
