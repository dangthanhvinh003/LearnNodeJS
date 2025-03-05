const express = require("express");
const {
  getHompage,
  getAddUserPage,
  getEditUser,
} = require("../controllers/homeController");
const {
  postAddUser,
  postEditUser,
  getDeleteUser,
} = require("../controllers/UserController");

const router = express.Router();

router.get("/", getHompage);

//Uset
router.get("/getAddUser", getAddUserPage);
router.post("/CreateNewUser", postAddUser);
router.get("/editUser/:id", getEditUser);
router.post("/editUser", postEditUser);
router.get("/deleteUser/:id", getDeleteUser);
module.exports = router;
