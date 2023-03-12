const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [GET] me/stored/courses
  storedCourses(req, res, next) {
    Course.find().then((courses) => {
      res.render("me/store_course", { courses: mutipleMongooseToObject(courses) });
    });
  }
}

module.exports = new MeController();
