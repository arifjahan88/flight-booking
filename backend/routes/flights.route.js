const express = require("express");
const {
  addFlights,
  getFlights,
  updateFlights,
  deleteFlights,
} = require("../controllers/flights.controllers");

const router = express.Router();

router.post("/add-flights", addFlights);
router.get("/get-flights", getFlights);
router.put("/update-flights/:id", updateFlights);
router.delete("/delete-flights/:id", deleteFlights);

module.exports = router;
