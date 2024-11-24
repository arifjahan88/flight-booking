const express = require("express");
const {
  addBookings,
  getBookings,
  updateBooking,
  deleteBooking,
  getBookingByUserId,
} = require("../controllers/booking.controllers");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/varifyAdmin");

const router = express.Router();

// Protect all routes after this middleware
router.use(verifyToken);

router.post("/", addBookings);
router.get("/user/:id", getBookingByUserId);

router.get("/", verifyAdmin, getBookings);
router.put("/:id", verifyAdmin, updateBooking);
router.delete("/:id", verifyAdmin, deleteBooking);

module.exports = router;
