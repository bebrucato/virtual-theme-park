const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const rideRoutes = require('./rideRoutes');
const vendorRoutes = require('./vendorRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/rides', rideRoutes);
router.use('/vendors', vendorRoutes);

module.exports = router;