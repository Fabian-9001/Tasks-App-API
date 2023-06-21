const projectControllers = require("./projects.controllers");

const getAllProjects = (req, res) => {
  projectControllers.findAllProjects
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err.message));
};

const getProjectById = (req, res) => {
  const id = req.params.id;
  projectControllers
    .findProjectById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json(`Project with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

const postProject = (req, res) => {
  const { title, description } = req.body;
  projectControllers
    .createProject({ title, description })
    .then((data) => {
      res.status(201).json({ message: "Create Project", data });
    })
    .catch((err) => console.log(err.message));
};

const patchProject = (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  projectControllers
    .updateProject(id, { title, description })
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "Project Updated", data });
      } else {
        res.status(404).json(`Project with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

const deleteProject = (req, res) => {
  const id = req.params.id;
  projectControllers
    .deleteProject(id)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "Deleted Project" });
      } else {
        res.status(404).json(`Project with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

module.exports = {
  getAllProjects,
  getProjectById,
  postProject,
  patchProject,
  deleteProject,
};
