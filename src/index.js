const express = require("express");
const app = express();

const apiRoute = require("./routers/api");
const connection = require("./config/database");

//config get from input
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));

//
app.use("/", apiRoute);

//Test Connection
const PORT = 8081;

//async await DB vì db dùng asyn await
(async () => {
  await connection();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
