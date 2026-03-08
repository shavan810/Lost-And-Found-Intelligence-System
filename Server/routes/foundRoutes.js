const express = require("express");
const router = express.Router();

const FoundItem = require("../models/FoundItem");
const LostItem = require("../models/LostItem");
const Notification = require("../models/Notification");
const calculateMatch = require("../utils/matchAlgorithm");


// REPORT FOUND ITEM + MATCHING
router.post("/report-found", async (req, res) => {

  try {

    const foundItem = await FoundItem.create(req.body);

    const lostItems = await LostItem.find();

    const THRESHOLD = 0.6;

    for (const lost of lostItems) {

      console.log("Lost item:", lost.item);
      console.log("Found item:", foundItem.item);

      const score = calculateMatch(lost, foundItem);

      console.log("Score:", score);

      if (score > THRESHOLD) {

        console.log("MATCH FOUND");

        await Notification.create({
          userId: lost.userId,
          message: `Possible match found for ${lost.item}`,
          lostItemId: lost._id,
          foundItemId: foundItem._id
        });

      }

    }

    res.json({
      message: "Found item saved successfully",
      foundItem
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({ error: "Server error" });

  }

});


// GET ALL FOUND ITEMS
router.get("/", async (req, res) => {

  try {

    const items = await FoundItem.find();

    res.json(items);

  } catch (error) {

    res.status(500).json({ error: "Server error" });

  }

});


// GET FOUND ITEMS OF LOGGED USER
router.get("/my/:userId", async (req, res) => {

  try {

    const items = await FoundItem.find({ userId: req.params.userId });

    res.json(items);

  } catch (error) {

    console.log(error);
    res.status(500).json({ error: "Server error" });

  }

});

module.exports = router;