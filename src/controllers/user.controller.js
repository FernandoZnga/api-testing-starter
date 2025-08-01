const { getUsers } = require('../services/user.service');

const getAllUsers = (req, res) => {
  const users = getUsers();
  res.status(200).json(users);
};

module.exports = { getAllUsers };
