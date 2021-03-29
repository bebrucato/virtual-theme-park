const router = require('express').Router();
const { Rides, User } = require('../../models');

router.get('/',  (req, res) => {
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

router.get('/:id', (req, res) => {
    Rides.findOne({
         where: {
             id: req.params.id
         },
         attributes: ['id', 'ride_name', 'description' ],
         include: [
             {
                 model: User,
             attributes: ['id', 'name', 'email', 'password'] 
             },
         ]
     })
         .then(dbRideData => {
             if (!dbRideData) {
                 res.status(404).json({ message: 'No ride found with this id' });
                 return;
             }
             res.json(dbRideData);
         })
         .catch(err => {
             console.log(err);
             res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Rides.create({
        ride_name: req.body.ride_name,
        description: req.body.description
    })
        .then(dbRideData => res.json(dbRideData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Rides.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbRideData => {
            if (!dbRideData[0]) {
                res.status(404).json({ message: 'No ride found with this id' });
                return;
            }
            res.json(dbRideData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Rides.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbRideData => {
            if (!dbRideData) {
                res.status(404).json({ message: 'No ride found with this id' });
                return;
            }
            res.json(dbRideData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

  module.exports = router;
  