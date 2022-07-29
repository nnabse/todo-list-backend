const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./src/modules/routes/routes");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/", routes);

const uri = "mongodb://localhost:27017/TodoApp";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("db ok");
  })
  .catch((err) => {
    console.log("db error");
  });

app.listen(port, () => {
  console.log("app launched on port", port);
});
