const express = require("express");
const {
  addFlights,
  getFlights,
  updateFlights,
  deleteFlights,
  getFlightsById,
  searchFlights,
} = require("../controllers/flights.controllers");

const router = express.Router();

router.get("/", getFlights);
router.get("/search", searchFlights);
router.get("/:id", getFlightsById);

//admin routes
router.post("/", addFlights);
router.put("/:id", updateFlights);
router.delete("/:id", deleteFlights);

module.exports = router;
