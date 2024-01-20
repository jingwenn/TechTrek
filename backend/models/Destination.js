import mongoose from "mongoose";
import Country from "./Country";

const destinationSchema = mongoose.Schema(
  {
    country_id: {
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: Country,
    },

    cost: {
      type: Number,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
