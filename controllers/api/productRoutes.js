const router = require('express').Router();
const { Products } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Products.findAll({
      attributes: ['id', 'product_name','description' ],
  })
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;