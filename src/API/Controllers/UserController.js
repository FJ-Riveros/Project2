//Cuando se crea un nuevo cliente
exports.nuevoUsuario = (req, res, next) => {
  //TODO: Insertar en la base de datos
  res.json({ mensaje: "El usuario se agregó correctamente" });
};
