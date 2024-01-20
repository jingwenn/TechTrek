import express from "express";
import ItineraryDestination from "../models/ItineraryDestination.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

// Create ItineraryDestination.itinerary_id, ItineraryDestination.destination_id
router.post("/", async (req, res) => {
  try {
    const newItineraryDestination = {
      itinerary_id: req.body.itinerary_id,
      destination_id: req.body.destination_id,
    };
    const itineraryDestination = await ItineraryDestination.create(
      newItineraryDestination
    );
    return res.status(201).send(itineraryDestination);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Read ItineraryDestination.itinerary_id, ItineraryDestination.destination_id filtered by ItineraryDestination.id
router.get("/:id", async (req, res) => {
  try {
    const itineraryDestination = await ItineraryDestination.findById(
      req.params.id
    ).exec();
    return res.status(201).send(itineraryDestination);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Read All ItineraryDestination.id, ItineraryDestination.itinerary_id, ItineraryDestination.destination_id
router.get("/", async (req, res) => {
  try {
    const itineraryDestinations = await ItineraryDestination.find({});
    return res.status(201).send(itineraryDestinations);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update ItineraryDestination.itinerary_id, ItineraryDestination.destination_id filtered by ItineraryDestination.id
router.put("/:id", async (req, res) => {
  try {
    const itineraryDestination = await ItineraryDestination.findById(
      req.params.id
    ).exec();
    itineraryDestination.itinerary_id =
      req.body.itinerary_id || itineraryDestination.itinerary_id;
    itineraryDestination.destination_id =
      req.body.destination_id || itineraryDestination.destination_id;
    await itineraryDestination.save();
    return res.status(201).send(itineraryDestination);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete ItineraryDestination.itinerary_id, ItineraryDestination.destination_id filtered by ItineraryDestination.id
router.delete("/:id", async (req, res) => {
  try {
    const itineraryDestination = await ItineraryDestination.findById(
      req.params.id
    ).exec();
    await itineraryDestination.deleteOne({ _id: itineraryDestination._id });
    return res.status(201).send(itineraryDestination);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
