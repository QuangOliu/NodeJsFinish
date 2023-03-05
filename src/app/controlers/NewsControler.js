class NewsControler {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.render("newDetail");
  }
}

module.exports = new NewsControler();
