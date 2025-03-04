const { getAllUser, getAllUserByID } = require("../services/CRUDSevice");
const getHompage = async (req, res) => {
  let results = await getAllUser();
  res.render("hompage", { ListUser: results });
};

const getAddUserPage = (req, res) => {
  res.render("AddUserPage");
};

const getEditUser = async (req, res) => {
  let id = req.param("id");
  console.log("id User :" + id);
  let getUserById = await getAllUserByID(id);
  console.log(getUserById);
  res.render("EditUserPage", { userById: getUserById[0] }); // số 0 thể hiện rằng là phần tử đầu tiên trong mảng
};
module.exports = {
  getHompage,
  getAddUserPage,
  getEditUser,
};
