const router = require('express').Router();
const { User,Rides,Products, Vendors } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    User.findAll({
        attributes: ['id', 'name','email','password' ],
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  });

  module.exports = router;