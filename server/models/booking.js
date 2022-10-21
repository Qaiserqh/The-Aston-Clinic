const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({

    name: {
        type: String ,
        required: true
    },
    userid : {
        type: String,
        required: true
    },
    treatmentid : {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    cost:
    {
        type: Number,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'booked'
    }
} , {
    timestamps: true,
})

const treatmentModel = mongoose.model('treatments', treatmentSchema)

module.exports = treatmentModel