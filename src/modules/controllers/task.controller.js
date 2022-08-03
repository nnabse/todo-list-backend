const Task = require("../models/taskModel");

module.exports.getAllTasks = (req, res) => {
  Task.find()
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      res.status(400).send("Error", err);
    });
};

module.exports.createTask = (req, res) => {
  const body = req.body;
  if (body.hasOwnProperty("name")) {
    Task.create({
      name: body.name,
      isDone: false,
      isEditing: false,
    }).then((result) => {
      res.status(200).send(result);
    });
  } else {
    res.status(400).send("Error! Check params.");
  }
};

module.exports.deleteTask = (req, res) => {
  const params = req.query;
  if (params.hasOwnProperty("_id") && params._id.length === 24) {
    Task.deleteOne({ _id: params._id }).then((result) => {
      res.status(200).send(result);
    });
  } else {
    res.status(400).send("Error! Check params.");
  }
};

module.exports.updateTask = (req, res) => {
  const body = req.body;
  const params = req.query;
  if (params.hasOwnProperty("_id") && params._id.length === 24) {
    if (body.hasOwnProperty("name") && body.hasOwnProperty("isDone")) {
      Task.updateOne({ _id: params._id }, body, {
        name: body.name,
        isDone: body.isDone,
      }).then((result) => {
        res.status(200).send(result);
      });
    } else {
      res.status(400).send("Error! Check params.");
    }
  } else {
    res.status(400).send("Error! Check params.");
  }
};
