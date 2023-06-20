const database = require("../utils/database");
const { DataTypes } = require("sequelize");

const Projects = database.define("projects", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Projects