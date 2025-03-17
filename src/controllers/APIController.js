const Booking = require("../models/bookingModel");
const getBookingAPI = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const bookings = await Booking.find()
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  if (!bookings.length)
    return res.status(404).json({ message: "Không có đơn đặt phòng nào" });

  return res.status(200).json({
    errCode: 0,
    data: bookings,
  });
};
const getBookingByDateAPI = async (req, res) => {
  const checkInDate = new Date(req.query.checkInDate);
  const checkOutDate = new Date(req.query.checkOutDate);
  if (checkInDate >= checkOutDate) {
    return res
      .status(400)
      .json({ message: "Ngày nhận phòng phải nhỏ hơn ngày trả phòng" });
  }

  const bookings = await Booking.find({
    checkInDate: { $gte: checkInDate },
    checkOutDate: { $lte: checkOutDate },
  });

  if (!bookings.length)
    return res.status(404).json({
      message: "Không tìm thấy đặt phòng trong khoảng thời gian này",
    });

  return res.status(200).json({
    errCode: 0,
    data: bookings,
  });
};

const postAddBookingAPI = async (req, res) => {
  const { customerId, roomId } = req.body;
  const checkInDate = new Date(req.body.checkInDate);
  const checkOutDate = new Date(req.body.checkOutDate);
  // Kiểm tra phòng có trống không
  const existingBooking = await Booking.findOne({
    roomId,
    checkOutDate: { $gt: new Date(checkInDate) },
    checkInDate: { $lt: new Date(checkOutDate) },
  });

  if (existingBooking)
    return res
      .status(400)
      .json({ message: "Phòng đã được đặt trong khoảng thời gian này" });

  const newBooking = new Booking({
    customerId,
    roomId,
    checkInDate,
    checkOutDate,
    status: "confirmed",
  });
  await newBooking.save();
  return res.status(200).json({
    errCode: 0,
    data: newBooking,
  });
};

const deleteBooking = async (req, res) => {
  const { bookingId } = req.params;

  const booking = await Booking.findById(bookingId);
  if (!booking)
    return res.status(404).json({ message: "Không tìm thấy đặt phòng" });

  if (new Date() >= new Date(booking.checkInDate)) {
    return res
      .status(400)
      .json({ message: "Không thể hủy đặt phòng khi đã đến ngày nhận phòng" });
  }

  let result = await Booking.findByIdAndDelete(bookingId);

  return res.status(200).json({
    message: "Hủy đặt phòng thành công",
    data: result,
  });
};

module.exports = {
  getBookingAPI,
  postAddBookingAPI,
  getBookingByDateAPI,
  deleteBooking,
};
