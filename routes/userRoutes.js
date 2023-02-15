const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/crear", userController.showCreate);
router.post("/crear", userController.registerUser);
router.get("/iniciar-sesion", userController.showLogIn);
router.post("/iniciar-sesion", userController.logInUser);
router.get("/", userController.store);
router.get("/:id", userController.show);
router.get("/:id/editar", userController.edit);
router.get("/:id", userController.update);
router.get("/:id", userController.destroy);

module.exports = router;
