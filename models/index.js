const User = require('./User');
const Products = require('./Products');
const Rides = require('./Rides');
const Vendors = require('./Vendors')


Vendors.hasMany(Products, {
  foreignKey: 'vendor_id',
  onDelete:"CASCADE"
})

Products.belongsTo(Vendors, {
  foreignKey: 'vendor_id',
})

User.hasMany(Rides, {
  foreignKey: 'user_id',
  onDelete:"CASCADE"
})

User.hasMany(Products, {
  foreignKey: 'user_id',
  onDelete:"CASCADE"
})

Products.belongsTo(User, {
  foreignKey: 'user_id'
})

Rides.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Products, Rides, Vendors};