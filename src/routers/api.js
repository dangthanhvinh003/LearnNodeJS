const express = require("express");

const routerAPI = express.Router();

const {
  getUsersAPI,
  postAddUserAPI,
} = require("../controllers/APIController.js");

//Test
routerAPI.get("/", (req, res) => {
  res.send("Hello API");
});

routerAPI.get("/users", getUsersAPI);

routerAPI.post("/users", postAddUserAPI);

module.exports = routerAPI;
