const express = require("express");
const mongoose = require("mongoose");

//Crear el servidor
const server = express();

//Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/");

//Puerto y arrancar
server.listen(4000, () => {
  console.log("Servidor funcionando");
});
