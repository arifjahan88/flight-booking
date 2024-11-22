const Booking = require("../models/booking.model");
const asyncHandler = require("../utils/asyncHandler");
const { createError } = require("../utils/errorHandler");

//Add booking Controller
exports.addBookings = asyncHandler(async (req, res, next) => {
  const createBookings = await Booking.create(req.body);
  if (!createBookings) {
    throw createError(400, "Add Booking Failed");
  }

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

  res.status(200).json({
    success: true,
    message: "Delete Booking Successfully",
    data: deleteBooking,
  });
});
