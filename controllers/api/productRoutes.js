const router = require('express').Router();
const { Products, Vendors, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Products.findAll({
      attributes: ['id', 'product_name','description' ],
      include: [
        {
            model: Vendors,
            attributes: ['id', 'vendor_name', 'description']
        },
        {
            model: User,
            attributes: ['id', 'name', 'email', 'password']
        },
    ]
  })
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;