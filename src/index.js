const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routers/web");
const connection = require("./config/database");
const mongoose = require("mongoose");
const Kitten = require("./models/Kitten");
require("dotenv").config();

//config get from input
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));

//config template
configViewEngine(app);

//User Router
app.use(webRoute);

//Model DB
const silence = new Kitten({ name: "Silence" });
silence.save();
console.log(silence.name); // 'Silence'

//Test Connection
const PORT = process.env.PORT;

//async await DB vì db dùng asyn await
(async () => {
  await connection();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();

//query
// connection.query("Select * from Users", function (err, results, fields) {
//   console.log(results);
// });
//port
