const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");



async function showComments(req, res){
 

}


async function createOneComment(req,res){
let newComment = req.body.comment;
const articleId = req.params.id;
const comment = await Comment.create({ content: newComment,articleId});
res.redirect(`/articulos/${articleId}`)
}
  
async function showOneComment(req, res){

}
  
async function deleteOneComment(req, res) {}
  
 
module.exports = {
showComments,
showOneComment,
createOneComment,
deleteOneComment,
};
  