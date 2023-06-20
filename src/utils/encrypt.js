const bcrypt = require("bcrypt");

const encryptPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10);
};

const comparePassword = (plainPassword, encryptedPassword) => {
  return bcrypt.compareSync(plainPassword, encryptedPassword);
};

module.exports = {
  encryptPassword,
  comparePassword,
};
