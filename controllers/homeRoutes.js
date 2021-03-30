const router = require('express').Router();
const { User, Vendors, Products, Rides } = require('../models');
const withAuth = require('../utils/auth');

router.get("/space",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
    res.render("space",{layout:"rides",title:"Space Mountain🚀",style:"style2.css"})
  })
  router.get("/haunted",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
    res.render("haunted",{layout:"rides",title:"Haunted Mansion 👻",style:"haunted.css"})
  })
  router.get("/pirates",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
    res.render("potc",{layout:"rides",title:"pirates",style:"potc.css"})
  })
  
  router.get("/starwars",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
    res.render("thesw",{layout:"rides",title:"Star-Wars 🦾 ",style:"starwars.css"})
  })
  
  
  
  router.get("/login",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
    res.render("login",{layout:"log",title:"Login",style:"logged.css"})
  })


router.get('/', async(req, res) => {
 try {
     res.render("homepage");           // might not await later
    }catch (err) {     
 }
});

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });







//post route for saving/ every turn post route/completed

module.exports = router;