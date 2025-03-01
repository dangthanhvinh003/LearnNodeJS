const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");

//config template
configViewEngine(app);

app.get("/", (req, res) => {
  res.render("sample.ejs");
});
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
