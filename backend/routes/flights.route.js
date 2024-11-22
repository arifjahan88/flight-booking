const express = require("express");
const {
  addFlights,
  getFlights,
  updateFlights,
  deleteFlights,
  getFlightsById,
} = require("../controllers/flights.controllers");

const router = express.Router();

router.get("/flights", getFlights);
// router.get("/flights/SEARCH", getFlights);
router.get("/flights/:id", getFlightsById);

//admin routes
router.post("/flights", addFlights);
router.put("/flights/:id", updateFlights);
router.delete("/flights/:id", deleteFlights);

module.exports = router;
