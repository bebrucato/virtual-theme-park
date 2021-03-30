const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
//const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({  });
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));
// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/space",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
  res.render("space",{layout:"rides",title:"Space Mountain🚀",style:"style2.css"})
})
app.get("/haunted",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
  res.render("haunted",{layout:"rides",title:"Haunted Mansion 👻",style:"haunted.css"})
})
app.get("/pirates",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
  res.render("potc",{layout:"rides",title:"🏴‍☠️POTC🏴‍☠️",style:"potc.css"})
})

app.get("/starwars",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
  res.render("thesw",{layout:"rides",title:"Star-Wars 🦾 ",style:"starwars.css"})
})

app.get("/entrance",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
  res.render("mainpark",{layout:"entrance",title:"Virtual Theme Park 💻",style:"entrance.css"})
})





app.get("/",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
  res.render("homepage",{layout:"main",title:"Virtual Disneyland Tour",style:"main.css"})
})

app.get("/login",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
  res.render("login",{layout:"log",title:"Login",style:"logged.css"})
})


app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
