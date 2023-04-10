require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3300;
const path = require('path');
const ejs = require("ejs");
const cors = require('cors');
// Cors 
//  const corsOptions = {
//  // origin: process.env.ALLOWED_CLIENTS.split(',')
//   "origin" :['http://localhost:3000', 'http://localhost:5500', 'http://localhost:3300','http://127.0.0.1:5500/'],

// }

// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

app.use(cors())
app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();
  
app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
 app.use('/api/files', require('./routes/files'));
 app.use('/files', require('./routes/show'));
 app.use('/files/download', require('./routes/download'));


app.listen(PORT, console.log(`Listening on port ${PORT}.`));