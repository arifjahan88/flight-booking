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
    from: {
      type: String,
      required: [true, "From is required"],
    },
    to: {
      type: String,
      required: [true, "To is required"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
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
