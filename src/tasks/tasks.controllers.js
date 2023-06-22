const Tasks = require("../models/tasks.models");
const uuid = require("uuid");

const findAllTasks = async () => {
  const data = await Tasks.findAll();
  return data;
};

const findTaskById = async (id) => {
  const data = await Tasks.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createTask = async (obj) => {
  const data = await Tasks.create({
    id: uuid.v4(),
    title: obj.title,
    description: obj.description,
    date: obj.date,
    duration: obj.duration,
    priority: obj.priority,
    state: obj.state,
    userId: obj.userId,
    projectId: obj.projectId,
  });
  return data;
};

const updateTask = async (id, obj) => {
  const data = await Tasks.update(obj, {
    where: {
      id: id,
    },
  });
  return data[0];
};

const deleteTask = async (id) => {
  const data = await Tasks.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllTasks,
  findTaskById,
  createTask,
  updateTask,
  deleteTask,
};
