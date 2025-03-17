const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const Auth = async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username: username, password: password });
  if (user != null) {
    const token = jwt.sign({ id: user._id, role: user.role }, "abcdefghjkl", {
      expiresIn: "1h",
    });
    return res.status(200).json({
      errCode: 0,
      data: token,
    });
  } else {
    return res.status(400).json({
      message: "invalid User",
    });
  }
};
module.exports = Auth;
