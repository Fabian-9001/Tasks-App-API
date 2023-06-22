const tasksControllers = require("./tasks.controllers");

const getAllTasks = (req, res) => {
  tasksControllers.findAllTasks
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err.message));
};

const getTaskById = (req, res) => {
  const id = req.params.id;
  tasksControllers
    .findTaskById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json(`Task with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

const postTask = (req, res) => {
  const {
    title,
    description,
    date,
    duration,
    priority,
    state,
    userId,
    projectId,
  } = req.body;
  tasksControllers
    .createTask({
      title,
      description,
      date,
      duration,
      priority,
      state,
      userId,
      projectId,
    })
    .then((data) => {
      res.status(201).json({ message: "Created Task", data });
    })
    .catch((err) => console.log(err.message));
};

const patchTask = (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  tasksControllers
    .updateTask(id, { title, description })
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "Updated Task", data });
      } else {
        res.status(404).json(`Task with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  tasksControllers
    .deleteTask(id)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "Deleted Task" });
      } else {
        res.status(404).json(`Task with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

module.exports = {
  getAllTasks,
  getTaskById,
  postTask,
  patchTask,
  deleteTask,
};
