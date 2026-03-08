const mongoose = require("mongoose");

const lostSchema = new mongoose.Schema({

  name: String,
  item: String,
  location: String,
  date: String,
  description: String,

  // ⭐ add this
  userId: String

}, { timestamps: true });

module.exports = mongoose.model("LostItem", lostSchema);