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
    course
      .save()
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {});
  }

  // [GET] courses/:id/edit
  edit(req, res, next) {
    const id = req.params.id;
    Course.findById(id)
      .then((course) => {
        res.render("courses/edit", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [PUT] courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch(next);
  }
  // [PATCH] courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  // [DELETE] courses/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  // [DELETE] courses/:id/force
  fordDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  // [POST] /courses/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;

      case "restore":
        Course.restore({ _id: { $in: req.body.courseIds } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;

      case "ford":
        Course.deleteOne({ _id: { $in: req.body.courseIds } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;

      default:
        break;
    }
  }
}

module.exports = new CourseController();
