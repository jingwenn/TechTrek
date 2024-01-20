import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Itinerary from "../models/Itinerary.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

// Create
router.post("/", async (req, res) => {
  try {
    const newItinerary = {
      country_id: req.body.country_id,
      user_id: req.body.user_id,
      budget: req.body.budget,
      title: req.body.title,
    };

    const itinerary = await Itinerary.create(newItinerary);
    return res.status(201).send(itinerary);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Read
router.get("/:id", async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (itinerary) {
      res.send(itinerary);
    } else {
      res.status(404).send({ message: "Itinerary Not Found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Read All
router.get("/", async (req, res) => {
  try {
    const itinerary = await Itinerary.find({});
    res.send(itinerary);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (itinerary) {
      itinerary.country_id = req.body.country_id || itinerary.country_id;
      itinerary.user_id = req.body.user_id || itinerary.user_id;
      itinerary.budget = req.body.budget || itinerary.budget;
      itinerary.title = req.body.title || itinerary.title;
      const updatedItinerary = await itinerary.save();
      res.send(updatedItinerary);
    } else {
      res.status(404).send({ message: "Itinerary Not Found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (itinerary) {
      await itinerary.deleteOne({ _id: itinerary._id });
      res.send({ message: "Itinerary Deleted" });
    } else {
      res.status(404).send({ message: "Itinerary Not Found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
