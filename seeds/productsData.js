const { Products } = require('../models');

const productsData = [
    {
      product_name: "Churro",
      description: "food",
      filename: "churro.jpg"
    },
    {
      product_name: "Turkey Leg",
      description: "food",
      filename: "turkeydisney.jpg"
    },
    {
      product_name: "Dole Whip",
      description: "food",
      filename: "dolewhip.jpg"
    },
    {
        product_name: "Soda",
        description: "drink",
        filename: "disneycoke.jpg"
      },
      {
        product_name: "Mickey Ears",
        description: "accessory",
        filename: "mickeyears.jpg"
      },
      {
        product_name: "Shirt",
        description: "accessory",
        filename: "disneyshirt.jpg"
      },
      {
        product_name: "Mug",
        description: "accessory",
        filename: "disneymug.jpg"
      }
  ]

const seedProducts = () => Products.bulkCreate(productsData);

module.exports = seedProducts;