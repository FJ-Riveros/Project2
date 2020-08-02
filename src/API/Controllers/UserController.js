const userModel = require("../Models/User.js");
const listaUsuarios = require("../");

exports.addUser = async (req, res, next) => {
  const newUser = new userModel(req.body);
  try {
    await newUser.save();
    res.json({ mensaje: "El usuario se agregó correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getUsers = async (req, res) => {
  try {
    const userList = await userModel.find();
    res.json(userList);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    const getSingleUser = await userModel.findById(req.params.userId);
    res.json(getSingleUser);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.deleteSingleUser = async (req, res) => {
  try {
    const deleteUSer = await userModel.findByIdAndDelete(req.params.userId);
    res.json({
      message: `The user ${req.params.userId} was succesfuly deleted `,
    });
  } catch (error) {
    res.json({ message: error });
  }
};

exports.updateSingleUser = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.userId, {
      $set: { nombre: req.body.nombre },
    });
    res.json({ updatedUser });
  } catch (error) {
    res.json({ message: error });
  }
};
