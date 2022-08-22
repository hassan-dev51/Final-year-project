const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  cnic: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//generation token
userSchema.methods.generateAuthToken = async function () {
  try {
    //it takes 2 parameter like payload and secrete key  and payload must be uniqure ther for we use id as a payload
    let token = jwt.sign({ _id: this._id }, process.env.SECRETE_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

const User = mongoose.model("USER", userSchema);

module.exports = User;
