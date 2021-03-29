const router = require('express').Router();
const { Products, Vendors, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',  (req, res) => {
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

router.get('/:id', (req, res) => {
   Products.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'product_name', 'description' ],
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
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Products.create({
        product_name: req.body.product_name,
        description: req.body.description
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Products.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData[0]) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Products.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  });




  

module.exports = router;