const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");

module.exports = function () {
  router.post("/adduser", userController.addUser);

  router.get("/getusers", userController.getUsers);

  router.get("/getuser:userId", userController.getSingleUser);

  router.delete("/deleteuser:userId", userController.deleteSingleUser);

  router.patch("/updateuser:userId", userController.updateSingleUser);

  return router;
};
