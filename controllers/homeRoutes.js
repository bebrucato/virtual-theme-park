const router = require('express').Router();
router.get("/login", async(req, res)=> {
    res.render("login")
})

router.get('/', async(req, res) => {
 try {
     res.render("homepage");           // might not await later
    }catch (err) {

     
 }
});

module.exports = router;