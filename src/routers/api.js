const express = require("express");

const routerAPI = express.Router();

const {
  getUsersAPI,
  postAddUserAPI,
  putEditUserAPI,
  getDeleteUser,
} = require("../controllers/APIController.js");

//Test
routerAPI.get("/", (req, res) => {
  res.send("Hello API");
});

routerAPI.get("/users", getUsersAPI);

routerAPI.post("/users", postAddUserAPI);
routerAPI.put("/users", putEditUserAPI);
routerAPI.delete("/users", getDeleteUser);

module.exports = routerAPI;
