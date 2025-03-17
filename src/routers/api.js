const express = require("express");

const routerAPI = express.Router();
const authenticateJWT = require("../middleware/authenticateJWT.js");
const {
  getBookingAPI,
  postAddBookingAPI,
  getBookingByDateAPI,
  deleteBooking,
} = require("../controllers/APIController.js");
const Auth = require("../controllers/AuthController.js");

//Test
routerAPI.get("/", (req, res) => {
  res.send("Hello API");
});

routerAPI.get("/bookings", authenticateJWT(["admin"]), getBookingAPI);

routerAPI.post("/bookings", authenticateJWT(["customer"]), postAddBookingAPI);
routerAPI.get(
  "/bookingsByDate",
  authenticateJWT(["customer"]),
  getBookingByDateAPI
);
routerAPI.delete(
  "/bookings/:bookingId",
  authenticateJWT(["customer"]),
  deleteBooking
);
routerAPI.post("/auth/login", Auth);
module.exports = routerAPI;
