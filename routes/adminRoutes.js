const express = require("express");
const router = express.Router();
const { Article, sequelize } = require("../models");
const adminController = require("../controllers/adminController");

router.get("/", adminController.showAdminPage);
router.get("/:id", adminController.showAdminArticle);
router.post("/", adminController.createOnePost);

// router.post("/update/:id", adminController.deleteOnePost);

router.get("/update/:id", async function (req, res) {
  const articleId = req.params.id;
  const result = await Article.findByPk(articleId);
  console.log(result);
  return res.render("partials/cardContainer", { result });
});

router.delete("/delete/:id", async function (req, res) {
  const articleId = req.params.id;
  const result = await Article.findByPk(articleId);
  console.log(result);
  return res.render("home", { result });
});

router.patch("/update/:id", async function (req, res) {
  const articleId = req.params.id;
  const result = await Article.findByPk(articleId);
  console.log(result);
  return res.render("home", { result });
});

module.exports = router;
