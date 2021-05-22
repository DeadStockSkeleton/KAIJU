const router = require("express").Router();
const fs = require('fs');
const multer  = require('multer')

const User = require('../models/User');
const Project = require('../models/Project');
const File = require('../models/File');
const session = require('express-session');
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../config/connection');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
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
        username: req.body.userQuery,
        email: req.body.emailQuery,
        password: req.body.passQuery,
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
        email: req.body.emailQuery
      }
    })

    if (!userData){
      return res.status(404).json({message: 'User not found'})
    }else{
      const verifyPass =  userData.checkPassword(req.body.passQuery)

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
          fs.writeFile(`${createdFile.uid}.html`,`<!--your code here ---!>`, (err)=>{
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
if (profileData){
  const profile = profileData.get({plain: true});
  return res.status(200).json(profile);
}
    


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
      res.status(400).json(err)
    }

    return res.status(200).json(data)
  })
})

router.post('/file',async (req, res) => {
  try{
    const file = req.body.file;
     const fileData = {
       title: file.title,
       uid: uuidv4(),
       type: file.type,
        project_id: req.body.id
     }

     const dataFile = await File.create(fileData)

     const createdFile = dataFile.get({plain: true});
     if (createdFile){
       switch(createdFile.type){
         case "html":
          fs.writeFile(`${createdFile.uid}.html`,`<!--your code here ---!>`, (err)=>{
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
       return res.status(200).json(createdFile)
     }
     
  }catch(err){
    return res.status(404).json(err)
  }
})

router.post('/saving', async (req, res) => {
  try{
    fs.writeFile(`${req.body.file}.${req.body.type}`, req.body.content,(err)=>{
      if (err){
        console.log(err)
      }

      return res.status(200).json("saved")
    })
  }catch(err){
    return res.status(404).json(err)
  }
})

router.get('/delete/project/:id', async (req, res) => {
  try{
    const filesData = await File.findAll({where: {project_id:req.params.id}})
    const files = filesData.map((file) => file.get({plain: true}))
    if (files){
      for (let i = 0; i < files.length; i++){
        fs.unlinkSync(`${files[i].uid}.${files[i].type}`);
      }
      return res.status(200).json(files)
    }else{
      return res.status(200).json('no files');
    }
  }catch(err){
    return res.status(404).json(err)
  }
})

router.delete('/delete/project/:id', async (req, res) => {
  try{
    const files = await File.destroy({
      where: {
        project_id:req.params.id 
      }
    })

    const project = await Project.destroy({
      where: {
        id:req.params.id 
      }
    })

    if (!files){
      res.status(404).end()
    }

    return res.status(200).json({files, project})
  }catch(err){
    return res.status(404).json(err)
  }
})

router.post('/search/projects', async (req, res)=>{
 
    
    
 if (!projectsData){
   return res.status(404).json(err)
 }else{
   const projectsData = await Project.findAll({where:{
      
        [Op.contains]:[{ title: req.body.query}]
      
    }})

    const projects = projectsData.map((project) => project.get({plain: true}))
    return res.status(200).json(projects);
 };
    
  
})

module.exports = router;