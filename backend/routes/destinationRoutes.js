import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Destination from "../models/Destination.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

// Create
router.post("/", async (req, res) => {
  try {
    const newDestination = {
      country_id: req.body.country_id,
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
    };

    const destination = await Destination.create(newDestination);
    return res.status(201).send(destination);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Read
router.get("/:id", async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (destination) {
      res.send(destination);
    } else {
      res.status(404).send({ message: "Destination Not Found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Read All
router.get("/", async (req, res) => {
  try {
    const destination = await Destination.find({});
    res.send(destination);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (destination) {
      destination.country_id = req.body.country_id || destination.country_id;
      destination.name = req.body.name || destination.name;
      destination.description = req.body.description || destination.description;
      destination.image = req.body.image || destination.image;

      const updatedDestination = await destination.save();
      res.send(updatedDestination);
    } else {
      res.status(404).send({ message: "Destination Not Found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    await destination.deleteOne({ _id: destination._id });
    res.send({ message: "Destination Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
