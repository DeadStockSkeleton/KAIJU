const router = require("express").Router();
const path = require("path");
const Mangakakalot = require('../models/Mangakakalot');

router.get('/', (req, res) => {
  res.send('AAAAAH');
})

router.get('/discover', async (req, res) => {
  try{
    const mKData = await Mangakakalot.findAll({});
    const mK = mKData.map((manga) => manga.get({plain: true}));
    console.log(mK);
    res.json({
      mK
    });
  }catch(err){
    res.status(500).json(err);
  }
})
  

module.exports = router;