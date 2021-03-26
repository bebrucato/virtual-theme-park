const router = require('express').Router();
const { Rides } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Rides.findAll({
        attributes: ['id', 'ride_name','description' ],
    })
        .then(dbRideData => res.json(dbRideData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  });

  module.exports = router;
  