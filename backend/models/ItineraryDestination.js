import mongoose from "mongoose";

const itineraryDestinationSchema = mongoose.Schema(
    {
        itinerary_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Itinerary",
        },

        destination_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Destination",
        },
    }
)

const ItineraryDestination = mongoose.model('ItineraryDestination', itineraryDestinationSchema);

export default ItineraryDestination;