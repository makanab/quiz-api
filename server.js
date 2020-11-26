
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const  cors = require('cors');
const app = express();
const bodyparser = require('body-parser');


const rts = require('./routes/index.route');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use('/api',rts);




app.listen(process.env.PORT,()=>{
    console.log('server started ....');
});



