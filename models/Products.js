const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model {};

Products.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    description: {
        type: DataTypes.STRING,
      },
      vendor_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'vendor',
          key:'id'
        }
},
  user_id: {
  type: DataTypes.INTEGER,
  references: {
    model: 'user',
    key:'id'
  }}
}, 
{
      sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'products',
});

module.exports= Products;