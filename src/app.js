//Imports and Dependencies
const express = require("express");
const cors = require("cors");
const config = require("../config");
const database = require("./utils/database");
const userRoutes = require("./users/users.routes");

//Initial Config
const app = express();
app.use(express.json());
app.use(cors());

//Database
database
  .authenticate()
  .then(() => console.log("This server is authenticated"))
  .catch((err) => console.log(err));

database
  .sync()
  .then(() => console.log("This server is synced"))
  .catch((err) => console.log(err));

//Routes
app.get("/", (req, res) => {
  res.status(200).json("Ok!");
});
app.use("/api/v1/users", userRoutes);

//Server
app.listen(config.api.port, () => {
  console.log(`This server is active on ${config.api.host}`);
});
