const express = require("express");
var router = express.Router();
const courseControler = require("../app/controlers/CourseController");

router.get("/create", courseControler.create);
router.post("/store", courseControler.store);
router.get("/:id/edit", courseControler.edit);
router.put("/:id", courseControler.update);
router.delete("/:id", courseControler.destroy);
router.get("/:slug", courseControler.show);

module.exports = router;
