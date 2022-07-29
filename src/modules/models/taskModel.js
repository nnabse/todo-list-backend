const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskScheme = new Schema({
  taskName: String,
  isDone: Boolean,
});

module.exports = Task = mongoose.model("tasks", taskScheme);
