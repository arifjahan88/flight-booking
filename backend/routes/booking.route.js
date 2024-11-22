const express = require("express");
const {
  addBookings,
  getBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/booking.controllers");

const router = express.Router();

router.post("/", addBookings);
// router.post("/bookings/user/:id", addBookings);

router.get("/", getBookings);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
