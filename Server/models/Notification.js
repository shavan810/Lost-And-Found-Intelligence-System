const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  message: {
    type: String
  },

  lostItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LostItem"
  },

  foundItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FoundItem"
  },

  isRead: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Notification", NotificationSchema);