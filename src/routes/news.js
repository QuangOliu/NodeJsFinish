var express = require("express");
var router = express.Router();
const newControler = require("../app/controlers/NewsControler");

router.get("/", newControler.index);

router.get("/:id", newControler.show);

module.exports = router;
