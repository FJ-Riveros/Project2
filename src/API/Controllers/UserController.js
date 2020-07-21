//Cuando se crea un nuevo cliente
exports.nuevoUsuario = (req, res, next) => {
  //TODO: Insertar en la base de datos
  console.log(req.body);
  res.json({ mensaje: "El usuario se agregó correctamente" });
};
