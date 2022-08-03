const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskScheme = new Schema({
  name: String,
  isDone: Boolean,
});

module.exports = Task = mongoose.model("tasks", taskScheme);
