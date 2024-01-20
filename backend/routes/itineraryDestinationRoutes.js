import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

// Create ItineraryDestination.itinerary_id, ItineraryDestination.destination_id
router.post('/', async (req, res) => {
  try {
    const newItineraryDestination = {
      itineraryid: req.body.itineraryid,
      destinationid: req.body.destinationid,
    };
    const itineraryDestination = await ItineraryDestination.create(newItineraryDestination);
    return res.status(201).send(itineraryDestination)
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Read ItineraryDestination.itinerary_id, ItineraryDestination.destination_id filtered by ItineraryDestination.id
router.get('/:id', async (req, res) => {
  try {
    const itineraryDestination = await ItineraryDestination.findById(req.params.id).exec();
    return res.status(201).send(itineraryDestination)
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Read All ItineraryDestination.id, ItineraryDestination.itinerary_id, ItineraryDestination.destination_id
router.get('/', async (req, res) => {
  try {
    const itineraryDestinations = await ItineraryDestination.find({});
    return res.status(201).send(itineraryDestinations)
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update ItineraryDestination.itinerary_id, ItineraryDestination.destination_id filtered by ItineraryDestination.id
router.put('/:id', async (req, res) => {
  try {
    const itineraryDestination = await ItineraryDestination.findById(req.params.id).exec();
    itineraryDestination.itineraryid = req.body.itineraryid;
    itineraryDestination.destinationid = req.body.destinationid;
    await itineraryDestination.save();
    return res.status(201).send(itineraryDestination)
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


// Delete ItineraryDestination.itinerary_id, ItineraryDestination.destination_id filtered by ItineraryDestination.id
router.delete('/:id', async (req, res) => {
  try {
    const itineraryDestination = await ItineraryDestination.findById(req.params.id).exec();
    await itineraryDestination.remove();
    return res.status(201).send(itineraryDestination)
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});




export default router
