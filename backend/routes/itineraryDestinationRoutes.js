import express from "express";
import ItineraryDestination from '../models/ItineraryDestination.js'
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

// Create ItineraryDestination.itinerary_id, ItineraryDestination.destination_id
router.post('/', async (req, res) => {
  try {
    const newItineraryDestination = {
      itinerary_id: req.body.itinerary_id,
      destination_id: req.body.destination_id,
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
    itineraryDestination.itinerary_id = req.body.itinerary_id;
    itineraryDestination.destination_id = req.body.destination_id;
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
    await itineraryDestination.deleteOne({ _id: itineraryDestination._id });
    return res.status(201).send(itineraryDestination)
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


// Get all destination_id for a singular itenerary_id
router.get('/itinerary/:id', async (req, res) => {
  try {
    const itineraryDestinations = await ItineraryDestination.find({itinerary_id: req.params.id});
    const itinerary_id = req.params.id
    let destination_ids = {destination_ids: []}

    for (const destination in itineraryDestinations) {
      //append to destination_ids[itinerary_id]
      destination_ids.destination_ids.push(itineraryDestinations[destination].destination_id)
    }

    return res.status(201).send(destination_ids)
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});



export default router
