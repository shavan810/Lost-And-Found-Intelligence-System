const express = require("express");
const router = express.Router();
const LostItem = require("../models/LostItem");


// ADD LOST ITEM
router.post("/add", async (req, res) => {
  try {

    const newItem = new LostItem(req.body);

    const savedItem = await newItem.save();

    res.status(201).json({
      message: "Lost item saved successfully",
      item: savedItem
    });

  } catch (error) {

    console.error("Add Lost Item Error:", error);

    res.status(500).json({
      error: "Server error while saving lost item"
    });

  }
});


// GET ALL LOST ITEMS
router.get("/", async (req, res) => {

  try {

    const items = await LostItem.find().sort({ createdAt: -1 });

    res.json(items);

  } catch (error) {

    console.error("Fetch Lost Items Error:", error);

    res.status(500).json({
      error: "Server error while fetching lost items"
    });

  }

});


// GET LOST ITEMS OF LOGGED USER
router.get("/my/:userId", async (req, res) => {

  try {

    const { userId } = req.params;

    const items = await LostItem.find({ userId }).sort({ createdAt: -1 });

    res.json(items);

  } catch (error) {

    console.error("Fetch User Lost Items Error:", error);

    res.status(500).json({
      error: "Server error while fetching user lost items"
    });

  }

});

module.exports = router;