const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((result) => {
        res.render("courses/show", {
          course: mongooseToObject(result),
        });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    // course.save();

    course
      .save()
      .then((result) => {
        res.redirect("/");
        // res.send("hello");
      })
      .catch((err) => {});
    // res.json(formData);
  }
}

module.exports = new CourseController();
