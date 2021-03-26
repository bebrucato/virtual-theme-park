const { User } = require('../models');

const userData = [
    {
      name: "Mickey",
      email: "mickey@disney.com",
      password: "password12345"
    },
    {
      name: "Minnie",
      email: "minnie@disney.com",
      password: "password12345"
    },
    {
      name: "Goofy",
      email: "goofy@disney.com",
      password: "password12345"
    }
  ]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;