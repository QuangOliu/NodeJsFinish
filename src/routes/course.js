const express = require("express");
var router = express.Router();
const courseControler = require("../app/controlers/CourseController");

router.get("/create", courseControler.create);
router.post("/store", courseControler.store);
router.get("/:id/edit", courseControler.edit);

router.post("/handle-form-actions", courseControler.handleFormActions);
router.put("/:id", courseControler.update);
router.patch("/:id/restore", courseControler.restore);

router.delete("/:id", courseControler.destroy);
router.delete("/:id/ford", courseControler.fordDelete);
router.get("/:slug", courseControler.show);

module.exports = router;
