const { where} = require("sequelize");
const { Article } = require("../models");
const {User} = require("../models"); 
const formidable = require('formidable');



function showAdminPage(req, res) {
  res.render("admin");
}

async function showAdminArticle(req, res) {
  const valorId = await req.params.id;
  const articlesWithId = await Article.findByPk(valorId,{ include: User });
  await res.json(articlesWithId);
}

async function deleteOnePost(req, res) {
  let articleId = req.params.id;
  const deleted = await Article.destroy({ where: { id: articleId } });
  await res.send(`el articulo con id ${articleId} fue eliminado`);
}

async function createOnePost(req, res) {
  console.log("*******************************************************************************************************************************************************************************************************")
   const form = formidable({
    multiples:true,
    uploadDir:__dirname + '/../public/img',
    keepExtensions:true,
   })
   form.parse(req,async (err,fields,files)=>{
    const fileName1 = files.image[0].newFilename;
    const fileName2 = files.image[1].newFilename;
    const newArticle = await Article.create({ title: fields.title, content: fields.content ,img1:fileName1,img2:fileName2 });
    res.json(newArticle)
   })
}

async function editAdminArticle(req, res) {
  console.log("funciono el patch");
  let titulo = req.body.content[0];
  let parrafo = req.body.content[1];
  let articleId = req.params.id;
  const updatedArticle = await Article.update(
    { title: titulo, content: parrafo },
    { where: { id: articleId } },
  );
  res.render("admin", { updatedArticle });
}

module.exports = {
  showAdminPage,
  showAdminArticle,
  deleteOnePost,
  createOnePost,
  editAdminArticle,
};
