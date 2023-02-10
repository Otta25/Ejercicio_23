const { Article } = require("../models");


function showAdminPage(req, res) {
  res.render("admin");
}

async function showAdminArticle(req, res) {
  const valorId = await req.params.id;
  const articlesWithId = await Article.findByPk(valorId);
  await res.json(articlesWithId);
}

module.exports = {
  showAdminPage,
  showAdminArticle,
};
