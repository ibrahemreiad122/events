require("dotenv").config();
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  eja = require("ejs"),
  mongoose = require("mongoose"),
  layouts = require("express-ejs-layouts"),
  port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_COL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const DB = mongoose.connection;
DB.on("open", () => {
  console.log("DB loaded");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(layouts);
app.use(require("./app/routes"));
app.listen(port);
