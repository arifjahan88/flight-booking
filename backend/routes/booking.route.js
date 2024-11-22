const express = require("express");
const {
  addBookings,
  getBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/booking.controllers");

const router = express.Router();

router.post("/add-booking", addBookings);
router.get("/get-booking", getBookings);
router.put("/update-booking/:id", updateBooking);
router.delete("/delete-booking/:id", deleteBooking);

module.exports = router;
