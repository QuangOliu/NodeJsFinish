var express = require("express");
var router = express.Router();
const sitrController = require("../app/controlers/SiteController");

router.get("/", sitrController.index);

router.get("/search", sitrController.search);

module.exports = router;
