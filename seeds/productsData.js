const { Products } = require('../models');

const productsData = [
    {
      product_name: "churro",
      description: "food",
      filename: "churro.jpg"
    },
    {
      product_name: "turkey_leg",
      description: "food",
      filename: "turkeydisney.jpg"
    },
    {
      product_name: "dole_whip",
      description: "food",
      filename: "dolewhip.jpg"
    },
    {
        product_name: "soda",
        description: "drink",
        filename: "disneycoke.jpg"
      },
      {
        product_name: "mickey_ears",
        description: "accessory",
        filename: "mickeyears.jpg"
      },
      {
        product_name: "shirt",
        description: "accessory",
        filename: "disneyshirt.jpg"
      },
      {
        product_name: "mug",
        description: "accessory",
        filename: "disneymug.jpg"
      }
  ]

const seedProducts = () => Products.bulkCreate(productsData);

module.exports = seedProducts;