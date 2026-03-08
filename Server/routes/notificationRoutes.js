const express = require("express");
const router = express.Router();

const Notification = require("../models/Notification");

router.get("/:userId", async (req, res) => {

  const notifications = await Notification.find({
    userId: req.params.userId
  });

  res.json(notifications);

});

// const Notification = require("../models/Notification");


// GET USER NOTIFICATIONS
router.get("/:userId", async (req, res) => {
  try {

    const notifications = await Notification.find({
      userId: req.params.userId
    }).sort({ createdAt: -1 });

    res.json(notifications);

  } catch (error) {

    console.log(error);
    res.status(500).json({ error: "Server error" });

  }
});


// MARK AS READ
router.put("/read/:id", async (req, res) => {

  try {

    await Notification.findByIdAndUpdate(req.params.id, {
      isRead: true
    });

    res.json({ message: "Notification marked as read" });

  } catch (error) {

    res.status(500).json({ error: "Server error" });

  }

});

module.exports = router;