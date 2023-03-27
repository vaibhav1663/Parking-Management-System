import mongoose from "mongoose";

const iotSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
            required: true,
        }
    }
);

const iotData = mongoose.model("iotData", iotSchema);

export default iotData;