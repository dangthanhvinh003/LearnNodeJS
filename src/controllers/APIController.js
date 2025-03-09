const User = require("../models/User");
const getUsersAPI = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    errCode: 0,
    data: results,
  });
};

const postAddUserAPI = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let add = req.body.address;

  let user = await User.create({ name: name, email: email, city: add });
  return res.status(200).json({
    errCode: 0,
    data: user,
  });
};
const putEditUserAPI = async (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let add = req.body.address;

  let user = await User.updateOne(
    { _id: id },
    { name: name, email: email, city: add }
  );

  return res.status(200).json({
    errCode: 0,
    data: user,
  });
};
const getDeleteUser = async (req, res) => {
  let id = req.body.id;
  let result = await User.deleteOne({ _id: id });
  return res.status(200).json({
    errCode: 0,
    data: result,
  });
};
module.exports = {
  getUsersAPI,
  postAddUserAPI,
  putEditUserAPI,
  getDeleteUser,
};
