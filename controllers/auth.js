const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res) {
  User
    .create(req.body)
    .then(() => res.json({ message: 'Registration successful'}));
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) return res.status(401).json({ message: 'Unauthorized' });

      // Generate a JWT and send it to the user
      const token = jwt.sign({ userId: user.id }, secret, {expiresIn: '1h'});
      return res.json({ message: `Welcome back ${user.username}`, token });
    });
}

module.exports = {
  register,
  login
};
