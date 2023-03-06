// import { create } from "../../dist/index.js"; // "express-handlebars"
const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const routes = require("./routes");
const db = require("./config/db");

// App
const app = express();
const port = 3000;

// Database
db.connect();

// Static file
app.use(express.static(path.join(__dirname, "public")));

// Logger
// app.use(morgan("combined"));

//Routing
routes(app);

// Engene
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
