const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedRides = require('./ridesData');
const seedVendors = require('./vendorsData');
const seedProducts = require('./productsData');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');

    await seedRides();
    console.log('\n----- RIDES SEEDED -----\n');

    await seedVendors();
    console.log('\n----- VENDORS SEEDED -----\n');

    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    process.exit(0);
};

seedAll();