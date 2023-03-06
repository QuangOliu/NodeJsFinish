const Course = require("../models/Course");

class SiteControler {
  index(req, res, next) {
    Course.find({})
      .then((courses) => res.json(courses))
      .catch(next);
  }

  search(req, res) {
    res.render("search");
  }

  hello(req, res) {
    const name = req.query.name;
    res.send(name);
  }
}

module.exports = new SiteControler();
