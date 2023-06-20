const database = require("../utils/database");
const { DataTypes } = require("sequelize");
const Projects = require("./projects.models");
const Users = require("./users.models");

const ProjectMembers = database.define("project_members", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  project_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Projects,
      key: "id",
    },
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
  },
});

module.exports = ProjectMembers;
