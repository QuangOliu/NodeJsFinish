const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [GET] me/stored/courses
  storeCourses(req, res, next) {
    Promise.all([Course.find(), Course.countDocumentsDeleted()])
      .then(([courses, deleteCount]) => {
        res.render("me/stored_course", { deleteCount, courses: mutipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  // [GET] me/trash/courses
  trashCourses(req, res, next) {
    Promise.all([Course.findDeleted(), Course.countDocuments()])
      .then(([courses, courseCount])=> {
        res.render("me/trash_course", {courseCount,  courses: mutipleMongooseToObject(courses) });
      })
  }
}

module.exports = new MeController();
