const express = require("express");
const router = express.Router();
const usuarioController = require("../Controllers/UserController");

module.exports = function () {
  //Agrega nuevos pacientes via POST
  router.post("/usuarios", usuarioController.nuevoUsuario);

  return router;
};
