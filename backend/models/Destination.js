import mongoose from "mongoose";
import Country from "./Country";

const userSchema = mongoose.Schema(
    {

        countryID: {

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
)

const Destination = mongoose.model('Destination', userSchema);

export default Destination;