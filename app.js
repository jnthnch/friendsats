const express = require("express");
const app = express();
const db = require('./db');
const bodyParser = require("body-parser");
const userRoutes = require('./routes/users')
const users = ["Jonathan", "Scott", "Grant", "Swan"];

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  return res.json(users);
});

module.exports = app;