const connection = require("../config/database");
const User = require("../models/User");

const postAddUser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let add = req.body.address;

  console.log(name, email, add);

  await User.create({ name: name, email: email, city: add });
  res.redirect("/");
};

const postEditUser = async (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let add = req.body.address;

  await User.updateOne({ _id: id }, { name: name, email: email, city: add });

  res.redirect("/");
};

const getDeleteUser = async (req, res) => {
  let id = req.param("id");
  await User.deleteOne({ _id: id });
  res.redirect("/");
};

module.exports = {
  postAddUser,
  postEditUser,
  getDeleteUser,
};
