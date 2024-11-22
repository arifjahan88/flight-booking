const express = require("express");
const {
  addBookings,
  getBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/booking.controllers");

const router = express.Router();

router.post("/bookings", addBookings);
// router.post("/bookings/user/:id", addBookings);

router.get("/bookings", getBookings);
router.put("/bookings/:id", updateBooking);
router.delete("/delete-booking/:id", deleteBooking);

module.exports = router;
