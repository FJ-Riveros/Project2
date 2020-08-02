const express = require("express");
const router = express.Router();
const usuarioController = require("../Controllers/UserController");
const Model = require("../Models/User");

module.exports = function () {
  router.post("/adduser", usuarioController.nuevoUsuario);

  router.get("/getusers", async (req, res) => {
    try {
      const userList = await Model.find();
      res.json(userList);
    } catch (error) {
      res.json({ message: error });
    }
  });

  router.get("/searchuser:userId", async (req, res) => {
    try {
      const getSingleUser = await Model.findById(req.params.userId);
      res.json(getSingleUser);
    } catch (error) {
      res.json({ message: error });
    }
  });

  router.delete("/deleteuser:userId", async (req, res) => {
    try {
      const deleteUSer = await Model.findByIdAndDelete(req.params.userId);
      res.json({
        message: `The user ${req.params.userId} was succesfuly deleted `,
      });
    } catch (error) {
      res.json({ message: error });
    }
  });

  router.patch("/updateuser:userId", async (req, res) => {
    try {
      const updatedUser = await Model.findByIdAndUpdate(req.params.userId, {
        $set: { nombre: req.body.nombre },
      });
      res.json({ updatedUser });
    } catch (error) {
      res.json({ message: error });
    }
  });

  return router;
};
