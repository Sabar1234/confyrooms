const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  password: { type: String, required: true },
  otp: String,
  isVerified: { type: Boolean, default: false },
  token: String,
  products:[]
});

const Users = new mongoose.model("user", userSchema);
module.exports = Users;
