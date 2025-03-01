const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
const name = express.Router();
const path = require("path");

const dbPath = path.join(__dirname, "../db.json");
//jsonjson
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// congif Css src
app.use(express.static(path.join(__dirname, "?")));

name.route("/user").get((req, res) => {
  const data = fs.readFileSync(dbPath, "utf8");
  const jsonData = JSON.parse(data); // Chuyển đổi thành JSON
  res.send(jsonData.product);
});
app.use(name);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
