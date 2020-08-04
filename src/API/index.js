const urlDirectory = require("./hidden");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();

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

// Middleware
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/", routes());

server.listen(4000, () => {
  console.log("Servidor funcionando");
});
