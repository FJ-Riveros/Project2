const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
    trim: true,
  },
});

module.exports = mongoose.model("Project 2 Users", userSchema);
