var express = require("express");
var router = express.Router();
const newController = require("../app/controlers/NewsController");

router.get("/", newController.index);

router.get("/:id", newController.show);

module.exports = router;
