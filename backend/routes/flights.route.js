const express = require("express");
const {
  addFlights,
  getFlights,
  updateFlights,
  deleteFlights,
  getFlightsById,
} = require("../controllers/flights.controllers");

const router = express.Router();

router.get("/", getFlights);
// router.get("/flights/SEARCH", getFlights);
router.get("/:id", getFlightsById);

//admin routes
router.post("/", addFlights);
router.put("/:id", updateFlights);
router.delete("/:id", deleteFlights);

module.exports = router;
