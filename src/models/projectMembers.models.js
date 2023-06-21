const database = require("../utils/database");
const { DataTypes } = require("sequelize");
const Projects = require("./projects.models");
const Users = require("./users.models");

const ProjectMembers = database.define("project_members", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
  },
  projectId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Projects,
      key: "id",
    },
  },
});

module.exports = ProjectMembers;
