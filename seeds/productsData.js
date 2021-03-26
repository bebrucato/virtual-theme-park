const { Products } = require('../models');

const productsData = [
    {
      product_name: "churro",
      description: "food"
    },
    {
      product_name: "turkey_leg",
      description: "food"
    },
    {
      product_name: "dole_whip",
      description: "food"
    },
    {
        product_name: "soda",
        description: "drink"
      },
      {
        product_name: "mickey_ears",
        description: "accessory"
      },
      {
        product_name: "shirt",
        description: "accessory"
      },
      {
        product_name: "mug",
        description: "accessory"
      }
  ]

const seedProducts = () => Products.bulkCreate(productsData);

module.exports = seedProducts;