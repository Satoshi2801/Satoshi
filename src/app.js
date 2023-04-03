const express = require('express');
const morgan = require('morgan');
const path = require('path');
const web = require('./routes/web.router');


const app = express();
//middleware  
app.use(morgan('combined'));

//declearing startics path
app.use(express.static(path.join(__dirname,"..","public")));

//routes

app.use('/',web);






module.exports = app;

