const db = require('../../db');
const usersModel = require('./users');

const login = ({email, password}) => {
  return usersModel.getOneByEmail(email)
    .then(guest => {
      if (!guest) throw {status: 400, message: 'Guest not found'};
      return guest;
    });
};

const updateSelf = id => {
  return usersModel.getOne(id);
};

module.exports = {
  login,
  updateSelf
};