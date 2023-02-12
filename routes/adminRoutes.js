const express = require("express");
const router = express.Router();
const { Article } = require("../models");
const adminController = require("../controllers/adminController");

router.get("/", adminController.showAdminPage);
router.get("/:id", adminController.showAdminArticle);
router.patch("/:id", adminController.editAdminArticle);
router.post("/", adminController.createOnePost);
router.delete("/delete/:id", adminController.deleteOnePost);

module.exports = router;
