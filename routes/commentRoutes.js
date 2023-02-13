const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Rutas relacionadas a los comentarios:
// ...

// router.get('/',commentController.showAllComments);
router.post('/:id',commentController.createOneComment)


module.exports = router;
