const database = require("../utils/database");
const { DataTypes } = require("sequelize");

const Users = database.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 30],
    },
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 30],
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATEONLY,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "User",
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Active",
  },
  is_verify: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Users;
