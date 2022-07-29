const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");

router.get("/allTasks", getAllTasks);
router.post("/createTask", createTask);
router.patch("/updateTask", updateTask);
router.delete("/deleteTask", deleteTask);

module.exports = router;
