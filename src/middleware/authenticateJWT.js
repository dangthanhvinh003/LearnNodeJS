const jwt = require("jsonwebtoken");

const authenticateJWT = (roles = []) => {
  return (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
      const decoded = jwt.verify(token, "abcdefghjkl");
      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).json({ message: "Invalid Token" });
    }
  };
};

module.exports = authenticateJWT;
