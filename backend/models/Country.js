import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Country = mongoose.model('Country', userSchema);

export default Country;