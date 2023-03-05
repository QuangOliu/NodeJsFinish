var express = require("express");
var router = express.Router();
const sitrControler = require("../app/controlers/SiteControler");

router.get("/", sitrControler.index);

router.get("/search", sitrControler.search);

module.exports = router;
