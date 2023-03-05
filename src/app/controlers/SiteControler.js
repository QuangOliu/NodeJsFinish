class SiteControler {
  index(req, res) {
    res.render("home");
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
