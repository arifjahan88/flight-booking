const Booking = require("../models/booking.model");
const Flights = require("../models/flights.model");
const Users = require("../models/user.model");
const asyncHandler = require("../utils/asyncHandler");
const { createError } = require("../utils/errorHandler");

//Add booking Controller
exports.addBookings = asyncHandler(async (req, res, next) => {
  const createBookings = await Booking.create(req.body);
  if (!createBookings) {
    throw createError(400, "Add Booking Failed");
  }

  //Add booking id to user
  const { _id } = req.user;
  const user = await Users.findById(_id);
  if (!user) {
    throw createError(400, "User Not Found");
  }
  user.bookingid.push(createBookings._id);
  await user.save();

  res.status(200).json({
    success: true,
    message: "Add Booking Successfully",
    data: createBookings,
  });
});

//Get booking Controller
exports.getBookings = asyncHandler(async (req, res, next) => {
  const getBookings = await Booking.find();
  if (!getBookings) {
    throw createError(400, "Get Booking Failed");
  }

  res.status(200).json({
    success: true,
    message: "Get Booking Successfully",
    data: getBookings,
  });
});

//Get booking by id Controller
exports.getBookingByUserId = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const getBookingById = await Users.findById(id).populate("bookingid").select("bookingid");
  if (!getBookingById) {
    throw createError(400, "Get Booking By Id Failed");
  }

  // Wait for all promises to resolve using Promise.all
  const filterflights = await Promise.all(
    getBookingById?.bookingid?.map(async (item) => {
      const { flightId } = item;
      console.log(flightId);
      const flightDetails = await Flights.findById(flightId);

      return {
        ...item._doc,
        flight: flightDetails,
        flightId: undefined,
      };
    })
  );

  res.status(200).json({
    success: true,
    message: "Get Booking By Id Successfully",
    data: filterflights,
  });
});

//update booking Controller
exports.updateBooking = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const updateBooking = await Booking.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updateBooking) {
    throw createError(400, "Update Booking Failed");
  }

  res.status(200).json({
    success: true,
    message: "Update Booking Successfully",
    data: updateBooking,
  });
});

//Delete booking Controller
exports.deleteBooking = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deleteBooking = await Booking.findByIdAndDelete(id);

  if (!deleteBooking) {
    throw createError(400, "Delete Booking Failed");
  }

  // Remove the booking ID from user's bookingid array
  await Users.findByIdAndUpdate(
    req?.user?._id,
    {
      $pull: { bookingid: id },
    },
    { new: true }
  );

  res.status(200).json({
    success: true,
    message: "Delete Booking Successfully",
    data: deleteBooking,
  });
});
