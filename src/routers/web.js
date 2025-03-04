const express = require("express");
const {
  getHompage,
  getAddUserPage,
  getEditUser,
} = require("../controllers/homeController");
const { postAddUser } = require("../controllers/UserController");

const router = express.Router();

router.get("/", getHompage);

//Uset
router.get("/getAddUser", getAddUserPage);
router.post("/CreateNewUser", postAddUser);
router.get("/editUser/:id", getEditUser);
module.exports = router;
