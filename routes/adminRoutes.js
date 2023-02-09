const express = require("express");
const router = express.Router();
const { Article } = require("../models");



router.get('/',(req,res)=>{
    res.render('admin')
})

router.get('/:id',async (req,res)=>{
const valorId = await req.params.id;
const articlesWithId = await Article.findByPk(valorId);
await res.json(articlesWithId)
})



module.exports = router;