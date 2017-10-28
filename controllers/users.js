const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:username', this.show);

    return router;
  },
  index(req, res) {
    models.User.findAll({
    }).then((allUsers) => {
      res.render('users', { allUsers });
    });
  },
  show(req, res) {
    models.User.findOne({
      where: {
        username: req.params.username,
      },
    }).then((user) => {
      if(user) {
        res.render('users/single', { user: user});
      } else {
        res.redirect('/users');
      }
    }).catch(() => {
      res.redirect('/users');
    });
  },
};
