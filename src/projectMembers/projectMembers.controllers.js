const ProjectMembers = require("../models/projectMembers.models");
const uuid = require("uuid");

const findAllProjectMembers = async () => {
  const data = await ProjectMembers.findAll();
  return data;
};

const findProjectMemberById = async (id) => {
  const data = await ProjectMembers.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createProjectMember = async (obj) => {
  const data = await ProjectMembers.create({
    id: uuid.v4(),
    userId: obj.userId,
    projectId: obj.projectId,
  });
  return data;
};

const updateProjectMember = async (id, obj) => {
  const data = await ProjectMembers.update(obj, {
    where: {
      id: id,
    },
  });
  return data[0];
};

const deleteProjectMember = async (id) => {
  const data = await ProjectMembers.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllProjectMembers,
  findProjectMemberById,
  createProjectMember,
  updateProjectMember,
  deleteProjectMember,
};
