const express = require("express");
const {
  getHompage,
  getAddUserPage,
  getEditUser,
} = require("../controllers/homeController");
const { postAddUser, postEditUser } = require("../controllers/UserController");

const router = express.Router();

router.get("/", getHompage);

//Uset
router.get("/getAddUser", getAddUserPage);
router.post("/CreateNewUser", postAddUser);
router.get("/editUser/:id", getEditUser);
router.post("/editUser", postEditUser);
module.exports = router;
