const { Vendors } = require('../models');

const vendorsData = [
    {
      vendor_name: 'food',
      description: 'sells food'
    },
    {
      vendor_name: 'accessory',
      description: 'sells accessories'
    },
    {
      vendor_name: 'food2',
      description: 'sells food'
    },
    {
        vendor_name: 'accessory2',
        description: 'sells accessories'
      }
  ]

const seedVendors = () => Vendors.bulkCreate(vendorsData);

module.exports = seedVendors;