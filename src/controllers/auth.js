const jwt = require('jsonwebtoken');
const model = require('../models/auth');

const login = (req, res, next) => {
  if (!req.body.email || !req.body.password) return next({status: 400, message: 'Missing information'});
  model.login(req.body)
    .then(({id, email, name, role_id}) => {
      const token = jwt.sign({id, email, name, role_id}, process.env.SECRET);
      return res.status(200).send({token});
    })
    .catch(next);
};

const isAuthenticated = (req, res, next) => {
  if (!req.headers.authorization) return next({status: 401, message: 'Unauthorized'});
  const [scheme, credentials] = req.headers.authorization.split(' ');
  jwt.verify(credentials, process.env.SECRET, (err, payload) => {
    if (err) return next({status: 401, message: 'Unauthorized'});
    req.claim = payload;
    next();
  });
};

const updateSelf = (req, res, next) => {
  model.updateSelf(req.claim.id)
    .then(self => {
      req.claim.name = self.name;
      next();
    });
};

const getAuthStatus = (req, res, next) => {
  return res.status(200).send({...req.claim});
}

module.exports = {
  login,
  isAuthenticated,
  updateSelf,
  getAuthStatus
};