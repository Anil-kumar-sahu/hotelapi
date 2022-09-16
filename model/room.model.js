const mongoose = require("mongoose");
const Schema = mongoose;
const roomSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    maxPeople: {
        type: Number,
        require: true,
    },
    desc: {
        type: String,
        require: true
    },

    roomNumber: {
        type: [{ number: Number, unavailabelDates: { type: [Date] } }],

    },


},
{timestamps:true});

module.exports = mongoose.model("Room", roomSchema);