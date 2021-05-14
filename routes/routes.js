const router = require("express").Router();
const path = require("path");
const User = require('../models/User');
const session = require('express-session');
const express = require("express");
const sequelize = require('../config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
router.use(express.json());
router.use(express.urlencoded({extended: true}));

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

router.use(session(sess));

router.post('/signup',async  (req,res) => {
  try {
    
console.log(req.body);
      const userCreate = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })
        req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = userCreate.id;
        req.session.username = userCreate.username;
       
        return res.status(200).json(userCreate);

     
      });
       
  } catch (err) {
    console.log(err);
  }
})

router.get('/', async (req,res) => {
  req.session.loggedIn = req.session.loggedIn;
  res.json(req.session.loggedIn);
  
})

module.exports = router;