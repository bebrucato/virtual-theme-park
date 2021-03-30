const { Products } = require('../models');

const productsData = [
    {
      product_name: "churro",
      description: "food",
      filename: ""
    },
    {
      product_name: "turkey_leg",
      description: "food",
      filename: ""
    },
    {
      product_name: "dole_whip",
      description: "food",
      filename: ""
    },
    {
        product_name: "soda",
        description: "drink",
        filename: ""
      },
      {
        product_name: "mickey_ears",
        description: "accessory",
        filename: ""
      },
      {
        product_name: "shirt",
        description: "accessory",
        filename: ""
      },
      {
        product_name: "mug",
        description: "accessory",
        filename: ""
      }
  ]

const seedProducts = () => Products.bulkCreate(productsData);

module.exports = seedProducts;