require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  console.log("Headers nhận được:", req.headers); // Log toàn bộ headers

  const token = req.header("Authorization")?.split(" ")[1];

  console.log("Token nhận được:", token); // Kiểm tra token có đúng không

  if (!token) return res.status(403).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      console.log("Lỗi JWT:", err.message);
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
