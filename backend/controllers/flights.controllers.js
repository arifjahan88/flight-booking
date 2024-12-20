const Flights = require("../models/flights.model");
const asyncHandler = require("../utils/asyncHandler");
const { createError } = require("../utils/errorHandler");

//Add Flights Controller
exports.addFlights = asyncHandler(async (req, res, next) => {
  const createFligts = await Flights.create(req.body);
  if (!createFligts) {
    throw createError(400, "Add Flights Failed");
  }

  res.status(200).json({
    success: true,
    message: "Add Flights Successfully",
    data: createFligts,
  });
});

//Get Flights Controller
exports.getFlights = asyncHandler(async (req, res, next) => {
  const getFlights = await Flights.find();
  if (!getFlights) {
    throw createError(400, "Get Flights Failed");
  }

  res.status(200).json({
    success: true,
    message: "Get Flights Successfully",
    data: getFlights,
  });
});

//Get Flights by ID Controller
exports.getFlightsById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const getFlights = await Flights.findById(id);
  if (!getFlights) {
    throw createError(400, "Get Flights Failed");
  }

  res.status(200).json({
    success: true,
    message: "Get Flights Successfully",
    data: getFlights,
  });
});

//update Flights Controller
exports.updateFlights = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const updateFlights = await Flights.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updateFlights) {
    throw createError(400, "Update Flights Failed");
  }

  res.status(200).json({
    success: true,
    message: "Update Flights Successfully",
    data: updateFlights,
  });
});

//Delete Flights Controller
exports.deleteFlights = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deleteFlights = await Flights.findByIdAndDelete(id);

  if (!deleteFlights) {
    throw createError(400, "Delete Flights Failed");
  }

  res.status(200).json({
    success: true,
    message: "Delete Flights Successfully",
    data: deleteFlights,
  });
});

//get flights by search
exports.searchFlights = asyncHandler(async (req, res, next) => {
  const { origin, destination, date } = req.query;

  const page = parseInt(req.query.page) || 1; // Default to page 1
  const itemsPerPage = parseInt(req.query.itemsPerPage) || 10; // Default to 10 items per page
  const skip = (page - 1) * itemsPerPage;

  const searchFlights = await Flights.find({
    $or: [{ from: origin, to: destination, date: date }],
  })
    .skip(skip)
    .limit(itemsPerPage);

  // Calculate total pages
  const totalFlights = searchFlights.length;
  const totalPages = Math.ceil(totalFlights / itemsPerPage);

  if (!searchFlights) {
    return next(createError(404, "No flights found matching your criteria"));
  }

  // Prepare pagination info
  const paginationInfo = {
    currentPage: page,
    itemsPerPage,
    totalItems: totalFlights,
    totalPages,
  };

  res.status(200).json({
    success: true,
    message: "Search Flights Successfully",
    pagination: paginationInfo,
    data: searchFlights,
  });
});
