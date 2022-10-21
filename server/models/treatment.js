const mongoose = require('mongoose');

const treatmentSchema = mongoose.Schema({

    name: {
        type: String ,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost:
    {
        type: Number,
        required: true
    },
    imageurls: [],
    bookings: []
} , {
    timestamps: true,
})

const treatmentModel = mongoose.model('treatments', treatmentSchema)

module.exports = treatmentModel