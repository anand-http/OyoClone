import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    description: {
        type: String,
        required: true,
        trim: true,

    },
    gallary: [{
        type: String,
        required: true,

    }],

    price: {
        type: String,
        required: true
    },

    amenities: [{
        name: String
    }
    ],
    location: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Hotels = mongoose.models?.hotel || mongoose.model("hotel", hotelSchema);

export default Hotels;