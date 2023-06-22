const projectMemberControllers = require("./projectMembers.controllers");

const getAllProjectMembers = (req, res) => {
  projectMemberControllers.findAllProjectMembers
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err.message));
};

const getProjectMemberById = (req, res) => {
  const id = req.params.id;
  projectMemberControllers
    .findProjectMemberById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json(`Project Member with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

const postProjectMember = (req, res) => {
  const { userId, projectId } = req.body;
  projectMemberControllers
    .createProjectMember({ userId, projectId })
    .then((data) => {
      res.status(201).json({ message: "Create Project Member", data });
    })
    .catch((err) => console.log(err.message));
};

const patchProjectMember = (req, res) => {
  const id = req.params.id;
  const { userId, projectId } = req.body;
  projectMemberControllers
    .updateProjectMember(id, { userId, projectId })
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "Project Member Updated", data });
      } else {
        res.status(404).json(`Project Member with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

const deleteProjectMember = (req, res) => {
  const id = req.params.id;
  projectMemberControllers
    .deleteProjectMember(id)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "Deleted Project Member" });
      } else {
        res.status(404).json(`Project Member with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

module.exports = {
  getAllProjectMembers,
  getProjectMemberById,
  postProjectMember,
  patchProjectMember,
  deleteProjectMember,
};
