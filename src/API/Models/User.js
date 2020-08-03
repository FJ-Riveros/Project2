const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  surname: {
    type: String,
    trim: true,
  },
  age: {
    type: String,
    trim: true,
  },
  lastRecipes: {
    type: String,
    trim: true,
  },
  weekSchedule: {
    type: String,
    trim: true,
  },
  favorites: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Project 2 Users", userSchema);
