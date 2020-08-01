const express = require("express");
const router = express.Router();
const usuarioController = require("../Controllers/UserController");
const Post = require("../Models/User");

module.exports = function () {
  //Agrega nuevos pacientes via POST
  router.post("/usuarios", usuarioController.nuevoUsuario);

  router.get("/getusuarios", async (req, res) => {
    try {
      const Posts = await Post.find();
      res.json(Posts);
    } catch (error) {
      res.json({ message: error });
    }
  });

  return router;
};
