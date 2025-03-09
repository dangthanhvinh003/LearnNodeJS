const mongoose = require("mongoose");
//shape data
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
