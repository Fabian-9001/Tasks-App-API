const Users = require("./users.models");
const Projects = require("./projects.models");
const Tasks = require("./tasks.models");
const ProjectMembers = require("./projectMembers.models");

const initModels = () => {
  Users.hasMany(Tasks);
  Tasks.belongsTo(Users);

  Projects.hasMany(Tasks);
  Tasks.belongsTo(Projects);

  Users.hasMany(ProjectMembers);
  ProjectMembers.belongsTo(Users);

  Projects.hasMany(ProjectMembers);
  ProjectMembers.belongsTo(Projects);
};

module.exports = initModels;
