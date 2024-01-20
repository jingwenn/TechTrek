import mongoose from "mongoose";

const itinerarySchema = mongoose.Schema(
  {
    country_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Country",
    },

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    budget: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

export default Itinerary;
