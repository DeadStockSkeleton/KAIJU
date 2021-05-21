const router = require("express").Router();
const path = require("path");
const fs = require('fs');
const multer  = require('multer')

const User = require('../models/User');
const Project = require('../models/Project');
const File = require('../models/File');
const session = require('express-session');
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
router.use(express.json());
router.use(express.urlencoded({extended: true}));
let storage;
const upload = multer({ storage})
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

router.post('/project', async (req, res)=>{
  try{
    const project = req.body.body;
    const projData = {
      title: project.title,
      desc: project.desc,
      user_id:req.session.userId
    }

   await Project.create(projData).then(async (data) => {
   if (req.body.file){
     const file = req.body.file;
     const fileData = {
       title: file.title,
       uid: uuidv4(),
       type: file.type,
        project_id: data.id
     }

     const dataFile = await File.create(fileData)

     const createdFile = dataFile.get({plain: true});
     if (createdFile){
       switch(createdFile.type){
         case "html":
          fs.writeFile(`${createdFile.uid}.html`,`<!DOCTYPE html>
           <html lang="en">
           <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Title Here</title>
           </head>
           <body>
             <!---Your Code Under Here--->
           </body>
           </html>`, (err)=>{
        if (err){
          console.log(err)
        }
      })
      break;
      case "css":
        fs.writeFile(`${createdFile.uid}.css`,`/*
        html5doctor.com Reset Stylesheet
        v1.6.1
        Last Updated: 2010-09-17
        Author: Richard Clark - http://richclarkdesign.com
        Twitter: @rich_clark
        */
        
        html, body, div, span, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        abbr, address, cite, code,
        del, dfn, em, img, ins, kbd, q, samp,
        small, strong, sub, sup, var,
        b, i,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section, summary,
        time, mark, audio, video {
            margin:0;
            padding:0;
            border:0;
            outline:0;
            font-size:100%;
            vertical-align:baseline;
            background:transparent;
        }
        
        body {
            line-height:1;
        }
        
        article,aside,details,figcaption,figure,
        footer,header,hgroup,menu,nav,section {
            display:block;
        }
        
        nav ul {
            list-style:none;
        }
        
        blockquote, q {
            quotes:none;
        }
        
        blockquote:before, blockquote:after,
        q:before, q:after {
            content:'';
            content:none;
        }
        
        a {
            margin:0;
            padding:0;
            font-size:100%;
            vertical-align:baseline;
            background:transparent;
        }
        
        /* change colours to suit your needs */
        ins {
            background-color:#ff9;
            color:#000;
            text-decoration:none;
        }
        
        /* change colours to suit your needs */
        mark {
            background-color:#ff9;
            color:#000;
            font-style:italic;
            font-weight:bold;
        }
        
        del {
            text-decoration: line-through;
        }
        
        abbr[title], dfn[title] {
            border-bottom:1px dotted;
            cursor:help;
        }
        
        table {
            border-collapse:collapse;
            border-spacing:0;
        }
        
        /* change border colour to suit your needs */
        hr {
            display:block;
            height:1px;
            border:0;  
            border-top:1px solid #cccccc;
            margin:1em 0;
            padding:0;
        }
        
        input, select {
            vertical-align:middle;
        }
        /*------Your Code Under Here------*/
        `, (err)=>{
        if (err){
          console.log(err)
        }
      })
      break;
default:
  fs.writeFile(`${createdFile.uid}.js`,`//Your Code Here`, (err)=>{
        if (err){
          console.log(err)
        }
      })
      break;
       }
      
     }

     
   }
      
     
 res.status(200).json(data)
   })
  }catch(err){
    return console.log(err);
  }
})

router.get('/projects', async (req, res) => {
  try{
    const projectData = await Project.findAll({
      where: {
        user_id:req.session.userId 
      }
    })

    const projects = projectData.map((project) => project.get({plain: true}))
    res.status(200).json(projects);
  }catch(err){
    return res.status(500).json(err);
  }
})

router.get('/projects/:id', async (req, res) => {
  try{
const projectData = await Project.findByPk(req.params.id)

const project = projectData.get({plain: true});

return res.status(200).json(project);
  }catch(err){
    return res.status(500).json(err);
  }
})
router.get('/projects/:id/code', async (req, res) => {
  try{
    const fileData = await File.findAll({
      where: {
        project_id: req.params.id
      }
    })

    const file = fileData.map((file) => file.get({plain: true}))
    return res.status(200).json(file);
  }catch(err){
    console.log(err);
    return res.status(500).json(err);
  }
})
router.get('/profile', async (req, res) => {
  try{
    const profileData = await User.findByPk(req.session.userId)

    const profile = profileData.get({plain: true});

return res.status(200).json(profile);
  }catch(err){
    console.log(err);
    return res.status(500).json(err);
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

router.get('/file/:id/:type', (req, res) => {
  fs.readFile(`./${req.params.id}.${req.params.type}`,'utf8', function(err, data){
    if (err){
      throw err;
    }

    return res.status(200).json(data)
  })
})

module.exports = router;