const Users = require("../models/users.models");
const { encryptPassword } = require("../utils/encrypt");
const uuid = require("uuid");

const findAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};

const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const findUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: {
      email: email,
    },
  });
  return data;
};

const createUser = async (obj) => {
  const data = await Users.create({
    id: uuid.v4(),
    name: obj.name,
    last_name: obj.lastName,
    email: obj.email,
    password: encryptPassword(obj.password),
    birthday: obj.birthday,
  });
  return data;
};

const updateUser = async (id, obj) => {
  const data = await Users.update(obj, {
    where: {
      id: id,
    },
  });
  return data[0];
};

const softDeleteUser = async (id) => {
  const data = await Users.update(
    { status: "Desactive" },
    {
      where: {
        id: id,
      },
    }
  );
  return data[0];
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllUsers,
  findUserById,
  findUserByEmail,
  createUser,
  updateUser,
  softDeleteUser,
  deleteUser,
};
