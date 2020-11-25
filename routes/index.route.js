const route = require('express').Router();
const fs = require('fs');
const db = fs.readFileSync('./db.json')

route.get('/quiz',async (req,res,next)=>{
    
    let data = await JSON.parse(db)
    res.status(200).json(data);
       
   })


module.exports = route;