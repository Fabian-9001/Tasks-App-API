const { findUserByEmail } = require("../users/users.controllers");

const verifyLogin = (email, password) => {
  try {
    const data = findUserByEmail(email);
    if (data.password === password) {
        return data
    }
  } catch (error) {}
};
