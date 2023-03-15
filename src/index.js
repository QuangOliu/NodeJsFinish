// import { create } from "../../dist/index.js"; // "express-handlebars"
const path = require("path");
var bodyParser = require("body-parser");
const express = require("express");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const methodOverride = require("method-override");
const routes = require("./routes");
const db = require("./config/db");

// App
const app = express();
const port = 3000;

// Method overwrite
app.use(methodOverride("_method"));

// Database
db.connect();

// Static file
app.use(express.static(path.join(__dirname, "public")));

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Logger
// app.use(morgan("combined"));

//Routing
routes(app);

// Engene
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      splitWord: (string, linmit) => {
        var resultText = "";
        if (string.length >= linmit) {
          let newString = "";
          newString = string.substring(0, linmit);
          const lastId = newString.lastIndexOf(" ");
          resultText = string.substring(0, lastId) + " ...";
        } else {
          resultText = string;
        }
        return resultText;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
