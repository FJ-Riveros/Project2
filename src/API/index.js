const urlDirectory = require("./url");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes");
const bodyParser = require("body-parser");
const cors = require("cors");

//Crear el servidor
const server = express();

//Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose
  .connect(urlDirectory.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected To Mongo Db DataBase");
  })
  .catch((err) => {
    console.log("DataBase Connection Error " + err);
  });

//Habilitar cors
server.use(cors());
//Habilitar bodyParser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//Habilitar routing
server.use("/", routes());

//Puerto y arrancar el servidor
server.listen(4000, () => {
  console.log("Servidor funcionando");
});
