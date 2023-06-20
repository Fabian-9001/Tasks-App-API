const database = require("../utils/database");
const Users = require("./users.models");
const Projects = require("./projects.models");
const { DataTypes } = require("sequelize");

const Tasks = database.define("tasks", {
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
  date: {
    type: DataTypes.DATEONLY
  },
  duration: {
    type: DataTypes.ARRAY(DataTypes.TIME),
  },
  priority: {
    type: DataTypes.STRING,
    defaultValue: "Normal",
  },
  state: {
    type: DataTypes.STRING,
    defaultValue: "Pendiente",
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
  },
  project_id: {
    type: DataTypes.UUID,
    references: {
      model: Projects,
      key: "id",
    },
  },
});

module.exports = Tasks;
