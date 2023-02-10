const { Article } = require("../models");

function showAdminPage(req, res) {
  res.render("admin");
}

async function showAdminArticle(req, res) {
  const valorId = await req.params.id;
  const articlesWithId = await Article.findByPk(valorId);
  await res.json(articlesWithId);
}

async function deleteOneUser(req, res) {
  let userId = req.params.id;
  console.log(userId);
}

module.exports = {
  showAdminPage,
  showAdminArticle,
  deleteOneUser,
};
