const news = require("./news");
const home = require("./home");
const course = require("./course");

function routes(app) {
  // page

  app.use("/news", news);

  app.use("/courses", course);

  app.use("/", home);
}

module.exports = routes;
