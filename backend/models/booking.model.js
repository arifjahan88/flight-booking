const mongoose = require("mongoose");
const { Schema } = mongoose;

const flightbookingschema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    flightId: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userNumber: {
      type: String,
      required: true,
    },
    sitNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", flightbookingschema);

module.exports = Booking;
