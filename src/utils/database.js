const { Sequelize } = require("sequelize");
const config = require("../../config");

const database = new Sequelize({
  dialect: "postgres",
  port: config.db.port,
  host: config.db.host,
  username: config.db.user,
  password: config.db.password,
  database: config.db.name,
});

module.exports = database;
