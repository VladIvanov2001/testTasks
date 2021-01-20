const jwt = require('jsonwebtoken');
const key = require('../keys');

module.exports = async function (req, res, next) {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(' ')[1];
    try {
      req.user = await jwt.verify(token, key.jwt);
      next();
    } catch (e) {
      return res.status(401).json();
    }
  } else {
    return res.status(401).json;
  }
};
