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

async function createOnePost(req, res) {
  let titulo = req.body.content[0];
  let parrafo = req.body.content[1];
  const newArticle = await Article.create({ title: titulo, content: parrafo });
  res.json({ newArticle });
}

module.exports = {
  showAdminPage,
  showAdminArticle,
  deleteOnePost,
  createOnePost,
};
