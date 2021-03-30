const router = require('express').Router();
const { User, Vendors, Products, Rides } = require('../models');
const withAuth = require('../utils/auth');

router.get("/login", async(req, res)=> {
    res.render("login")
});
router.get("/space", async(req, res)=> { // ROAR
    res.render("space")
});
router.get("/pirates", async(req, res)=> {  // ROAR
    res.render("potc")
});
router.get("/haunted", async(req, res)=> {  /// ROAR
    res.render("haunted")
});
router.get("/starwars", async(req, res)=> {  // ROAR
    res.render("thesw")
});




router.get('/', async(req, res) => {
 try {
     res.render("homepage");           // might not await later
    }catch (err) {     
 }
});







//post route for saving/ every turn post route/completed

module.exports = router;