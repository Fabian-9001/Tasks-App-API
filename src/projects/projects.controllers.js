const Projects = require("../models/projects.models");
const uuid = require("uuid");

const findAllProjects = async () => {
  const data = await Projects.findAll();
  return data;
};

const findProjectById = async (id) => {
  const data = await Projects.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createProject = async (obj) => {
  const data = await Projects.create({
    id: uuid.v4(),
    title: obj.title,
    description: obj.description,
  });
  return data;
};

const updateProject = async (id, obj) => {
  const data = await Projects.update(obj, {
    where: {
      id: id,
    },
  });
  return data[0];
};

const deleteProject = async (id) => {
  const data = await Projects.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllProjects,
  findProjectById,
  createProject,
  updateProject,
  deleteProject,
};
