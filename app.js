const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World,\nIT WORKED !");
});
app.get("/new", function (req, res) {
  res.send("NEW ALSO WORKED !");
});
app.listen(process.env.PORT || 5000);
module.exports = app;