const express = require("express");
const router = express.Router();
const { Article } = require("../models");
const adminController = require("../controllers/adminController");

router.get("/", adminController.showAdminPage);
router.get("/:id", adminController.showAdminArticle);
router.post("/delete/:id", adminController.deleteOneUser);

module.exports = router;
