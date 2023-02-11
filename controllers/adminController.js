const { Article } = require("../models");

function showAdminPage(req, res) {
  res.render("admin");
}

async function showAdminArticle(req, res) {
  const valorId = await req.params.id;
  const articlesWithId = await Article.findByPk(valorId);
  await res.json(articlesWithId);
}

async function deleteOnePost(req, res) {
  let articleId = req.params.articleId;
  console.log(articleId);
}

module.exports = {
  showAdminPage,
  showAdminArticle,
  deleteOnePost,
};
