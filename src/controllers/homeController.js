const { getAllUser } = require("../services/CRUDSevice");
const getHompage = async (req, res) => {
  let results = await getAllUser();
  res.render("hompage", { ListUser: results });
};

const getAddUserPage = (req, res) => {
  res.render("AddUserPage");
};

const getEditUser = (req, res) => {
  res.render("EditUserPage");
};
module.exports = {
  getHompage,
  getAddUserPage,
  getEditUser,
};
