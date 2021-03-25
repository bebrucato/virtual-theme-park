const router = require('express').Router();
router.get("/login")

router.get('/', async(req, res) => {
 try {
     res.render("login");           // might not await later
    }catch (err) {

     
 }
});

module.exports = router;