const express = require("express");
const {
  addFlights,
  getFlights,
  updateFlights,
  deleteFlights,
  getFlightsById,
  searchFlights,
} = require("../controllers/flights.controllers");
const verifyAdmin = require("../middleware/varifyAdmin");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.get("/", getFlights);
router.get("/search", searchFlights);
router.get("/:id", getFlightsById);

//admin routes
router.post("/", verifyToken, verifyAdmin, addFlights);
router.put("/:id", verifyToken, verifyAdmin, updateFlights);
router.delete("/:id", verifyToken, verifyAdmin, deleteFlights);

module.exports = router;
