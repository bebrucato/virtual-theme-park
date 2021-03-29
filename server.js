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
app.get("/potc",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
  res.render("potc",{layout:"rides",title:"🏴‍☠️POTC🏴‍☠️",style:"potc.css"})
})

app.get("/thesw",(req, res)=>{          //TESTING DO NOT REMOVE ~ROAR
  res.render("thesw",{layout:"rides",title:"Star-Wars 🦾 ",style:"starwars.css"})
})

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
