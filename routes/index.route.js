const route = require('express').Router();
const fs = require('fs');

route.get('/quiz',async (req,res,next)=>{
    const db = await fs.readFileSync('./db.json')
    res.send(JSON.parse(db))
       
   })


module.exports = route;