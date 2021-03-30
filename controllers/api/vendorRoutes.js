const router = require('express').Router();
const { Vendors } = require('../../models');

router.get('/',  (req, res) => {
    Vendors.findAll({
        attributes: ['id', 'vendor_name','description' ],
    })
        .then(dbVendorData => res.json(dbVendorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Vendors.findOne({
         where: {
             id: req.params.id
         },
         attributes: ['id', 'vendor_name', 'description' ],
     })
         .then(dbVendorData => {
             if (!dbVendorData) {
                 res.status(404).json({ message: 'No vendor with this id' });
                 return;
             }
             res.json(dbVendorData);
         })
         .catch(err => {
             console.log(err);
             res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Vendors.create({
        vendor_name: req.body.vendor_name,
        description: req.body.description
    })
        .then(dbVendorData => res.json(dbVendorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Vendors.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbVendorData => {
            if (!dbVendorData[0]) {
                res.status(404).json({ message: 'No vendor found with this id' });
                return;
            }
            res.json(dbVendorData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Vendors.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbVendorData => {
            if (!dbVendorData) {
                res.status(404).json({ message: 'No vendor found with this id' });
                return;
            }
            res.json(dbVendorData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

module.exports = router;