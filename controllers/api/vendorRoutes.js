const router = require('express').Router();
const { Vendors } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Vendors.findAll({
        attributes: ['id', 'vendor_name','description' ],
    })
        .then(dbVendorData => res.json(dbVendorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  });

  module.exports = router;