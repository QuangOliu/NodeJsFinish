const news = require("./news");
const home = require("./home");

function routes(app) {
  // page
  app.use("/news", news);
  
  app.use("/", home);
}

module.exports = routes;
