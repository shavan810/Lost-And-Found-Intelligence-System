const mongoose = require("mongoose");

const foundSchema = new mongoose.Schema({
  name: String,
  item: String,
  location: String,
  date: String,
  description: String
});

module.exports = mongoose.model("FoundItem", foundSchema);