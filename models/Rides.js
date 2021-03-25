const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rides extends Model {};

Rides.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    ride_name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    description: {
        type: DataTypes.STRING,
      },
      sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rides',
});

module.exports= Rides;