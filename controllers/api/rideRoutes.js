const router = require('express').Router();
const { Rides, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Rides.findAll({
        attributes: ['id', 'ride_name','description' ],
        include: [
            {
                model: User,
                attributes: ['id', 'name', 'email', 'password']
            },
        ]
    })
        .then(dbRideData => res.json(dbRideData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  });

  module.exports = router;
  