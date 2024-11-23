const mongoose = require("mongoose");
const { Schema } = mongoose;

const flightbookingschema = new Schema(
  {
    name: {
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
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", flightbookingschema);

module.exports = Booking;
