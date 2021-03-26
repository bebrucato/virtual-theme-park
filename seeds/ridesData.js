const { Rides } = require('../models');

const ridesData = [
    {
      ride_name: "pirates_of_the_caribbean",
      description: "ride"
    },
    {
      ride_name: "haunted_mansion",
      description: "ride"
    },
    {
      ride_name: "space_mountain",
      description: "ride"
    },
    {
        ride_name: "star_wars",
        description: "ride"
      }
  ]

const seedRides = () => Rides.bulkCreate(ridesData);

module.exports = seedRides;