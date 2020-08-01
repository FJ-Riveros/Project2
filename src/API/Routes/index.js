const express = require("express");
const router = express.Router();
const usuarioController = require("../Controllers/UserController");
const Post = require("../Models/User");

module.exports = function () {
  //Agrega nuevos pacientes via POST
  router.post("/adduser", usuarioController.nuevoUsuario);

  router.get("/getusers", async (req, res) => {
    try {
      const Posts = await Post.find();
      res.json(Posts);
    } catch (error) {
      res.json({ message: error });
    }
  });

  router.get("/:postId", async (req, res) => {
    try {
      const Posts = await Post.findById(req.params.postId);
      res.json(Posts);
    } catch (error) {
      res.json({ message: error });
    }
  });

  router.delete("/deleteuser", async (req, res) => {
    try {
      const Posts = await Post.deleteMany();
    } catch (error) {
      res.json({ message: error });
    }
  });

  return router;
};
