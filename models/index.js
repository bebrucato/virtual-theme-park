const User = require('./User');
const Products = require('./Products');
const Rides = require('./Rides');
const Vendors = require('./Vendors')


Vendors.hasMany(Products, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

Products.belongsTo(Vendors, {
  foreignKey: 'id',
  foreingKey: 'product_name'
});

module.exports = { User, Products, Rides, Vendors};