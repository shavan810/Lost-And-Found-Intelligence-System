const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  registerNumber: String,
  faculty: String,
  phone: String,
  username: String,
  email: { type: String, unique: true },
  password: String,
  otp: String,
  otpExpiry: Date
});

module.exports = mongoose.model("User", userSchema);