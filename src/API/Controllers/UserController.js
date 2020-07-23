const User = require("../Models/User");

//Cuando se crea un nuevo cliente
exports.nuevoUsuario = async (req, res, next) => {
  //Crear obeto de usuario
  const usuario = new User(req.body);

  try {
    await usuario.save();
    res.json({ mensaje: "El usuario se agregó correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};
