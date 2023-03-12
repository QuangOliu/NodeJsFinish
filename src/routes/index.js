const news = require("./news");
const home = require("./home");
const course = require("./course");
const me = require("./me");

function routes(app) {
  // page

  app.use("/news", news);

  app.use("/me", me);

  app.use("/courses", course);

  app.use("/", home);
}

module.exports = routes;
