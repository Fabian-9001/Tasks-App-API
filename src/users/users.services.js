const userControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  userControllers
    .findAllUsers()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err.message));
};

const getUserById = (req, res) => {
  const id = req.params.id;
  userControllers
    .findUserById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json(`User with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

const postUser = (req, res) => {
  const { name, lastName, email, password, birthday } = req.body;
  userControllers
    .createUser({ name, lastName, email, password, birthday })
    .then((data) => {
      res.status(201).json({ message: "Create user", data });
    })
    .catch((err) => console.log(err.message));
};

const patchUser = (req, res) => {
  const id = req.params.id;
  const { name, lastName, email, birthday } = req.body;
  userControllers
    .updateUser(id, { name, lastName, email, birthday })
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "Updated user", data });
      } else {
        res.status(404).json(`User with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

const softDeleteUser = (req, res) => {
  const id = req.params.id;
  userControllers
    .softDeleteUser(id)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "User temporarily Deleted" });
      } else {
        res.status(404).json(`User with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  userControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "Deleted User" });
      } else {
        res.status(404).json(`User with id:${id} not founded`);
      }
    })
    .catch((err) => console.log(err.message));
};

//My User
const getMyUser = (req, res) => {
  const id = req.user.id;
  userControllers
    .findUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err.message));
};

const patchMyUser = (req, res) => {
  const id = req.user.id;
  const { name, lastName, birthday } = req.body;
  userControllers
    .updateUser(id, { name, lastName, birthday })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err.message));
};

const deleteMyUser = (req, res) => {
  const id = req.user.id;
  userControllers
    .softDeleteUser(id)
    .then(() => {
      res.status(200).json({ message: "User temporarily Deleted" });
    })
    .catch((err) => console.log(err.message));
};

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  patchUser,
  softDeleteUser,
  deleteUser,
  getMyUser,
  patchMyUser,
  deleteMyUser,
};
