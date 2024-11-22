const mongoose = require("mongoose");
const { Schema } = mongoose;

const flightSchema = new Schema(
  {
    flightname: {
      type: String,
      required: [true, "Flight Name is required"],
      unique: true,
      trim: true,
    },

    flightclass: {
      type: String,
      required: [true, "Flight Class is required"],
    },

    facilities: {
      type: Array,
      default: [],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    imageUrl: {
      type: String,
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
    },
    totalseats: {
      type: Number,
      required: [true, "Total Seats is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Flights = mongoose.model("Flights", flightSchema);

module.exports = Flights;
