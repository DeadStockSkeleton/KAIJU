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
        online: true,
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

router.post('/login', async (req, res) => {
  try{
    console.log(req.body)
    const userData = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!userData){
      return res.status(404).json({message: 'User not found'})
    }else{
      const verifyPass =  userData.checkPassword(req.body.pass)

      if (!verifyPass){
      return res
        .status(400)
        .json({ message: 'Incorrect password or email' });
      
      }else{
        try{
          req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = userData.id;
            req.session.username = userData.username;
           
            return res.status(200).json(userData);
    
         
          });
         
        }catch(err){
          return console.log(err);
        }
        
      }
    }

    
  } catch (err) {
    console.log(err);
  }
})

router.post('/logout', (req,res) => {
  try{if (req.session.loggedIn){
    req.session.destroy(() => {
      return res.status(204).end();
    });
  } else {
    return res.status(404).end();
  }
}catch(err){
  return console.log(err)
}
  
})

router.get('/auth', (req, res) => {
  try{
    if (req.session.loggedIn){
      const isLoggedIn = {online: req.session.loggedIn}
      return res.status(200).json(isLoggedIn)
    }
    res.status(400).end();
  }catch(err){
    return res.status(404).json(err)
  }
})

module.exports = router;