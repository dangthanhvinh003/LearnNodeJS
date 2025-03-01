const express = require("express");
const { getHompage } = require("../controllers/homeController");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("sample.ejs");
});

router.get("/a", getHompage);

module.exports = router;
