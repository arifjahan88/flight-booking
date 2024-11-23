const express = require("express");
const {
  addBookings,
  getBookings,
  updateBooking,
  deleteBooking,
  getBookingByUserId,
} = require("../controllers/booking.controllers");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.post("/", verifyToken, addBookings);
router.get("/user/:id", getBookingByUserId);

router.get("/", getBookings);
router.put("/:id", updateBooking);
router.delete("/:id", verifyToken, deleteBooking);

module.exports = router;
