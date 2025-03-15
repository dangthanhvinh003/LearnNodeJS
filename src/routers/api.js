const express = require("express");

const routerAPI = express.Router();
const authenticateJWT = require("../middleware/authenticateJWT.js");
const {
  getUsersAPI,
  postAddUserAPI,
  putEditUserAPI,
  getDeleteUser,
  Auth,
} = require("../controllers/APIController.js");

//Test
routerAPI.get("/", (req, res) => {
  res.send("Hello API");
});

routerAPI.get("/users", authenticateJWT, getUsersAPI);

routerAPI.post("/users", authenticateJWT, postAddUserAPI);
routerAPI.put("/users", authenticateJWT, putEditUserAPI);
routerAPI.delete("/users", authenticateJWT, getDeleteUser);
routerAPI.post("/Auth", Auth);
module.exports = routerAPI;
