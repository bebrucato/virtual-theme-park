const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vendors extends Model {};

Vendors.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    vendor_name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    description: {
        type: DataTypes.STRING,
}},
      {
      sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vendors',
});

module.exports= Vendors;