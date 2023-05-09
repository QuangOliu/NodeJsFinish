const express = require("express");
var router = express.Router();
const meController = require("../app/controlers/MeController");

router.get("/stored/courses", meController.storeCourses);
router.get("/trash/courses", meController.trashCourses);

module.exports = router;
