import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Itinerary from "../models/Itinerary.js";
import cookieParser from "cookie-parser";
import Country from "../models/Country.js";

const router = express.Router();
router.use(cookieParser());

// Create
router.post("/", async (req, res) => {
  try {
    const newCountry = {
        name: req.body.name,
    };

    const country = await Country.create(newCountry);
    return res.status(201).send(country);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


// Read All
router.get("/", async (req, res) => {
  try {
    const country = await Country.find({});
    res.send(country);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


// Delete
router.delete("/", async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    if (country) {
      await country.deleteOne({ _id: country._id });
      res.send({ message: "Country Deleted" });
    } else {
      res.status(404).send({ message: "Country Not Found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
