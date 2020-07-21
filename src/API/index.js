const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes");
const bodyParser = require("body-parser");

//Crear el servidor
const server = express();

//Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/veterinaria", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//Habilitar bodyParser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//Habilitar routing
server.use("/", routes());
//Puerto y arrancar el servidor
server.listen(4000, () => {
  console.log("Servidor funcionando");
});
