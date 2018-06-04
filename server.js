'use strict';
//setting up our npm stuff and creating app and client

const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');
const PORT= process.env.PORT || 3000;
const app = express();
const conString = process.env.DATABASE_URL;
const client =  new pg.Client(conString);

client.connect();
client.on('error', err => console.error(err));
app.listen(PORT, () => console.log(`Listening on port 3000`));
// client.on('error', err => console.error(err));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));

// all unmatched requests to this path, with no file extension, redirect to the dash page
app.use('/dash', function ( req, res, next ) {
// uri has a forward slash followed any number of any characters except full stops (up until the end of the string)
  if (/\/[^.]*$/.test(req.url)) {
    res.sendfile(__dirname + '/public/dash/index.html');
  } else {
    next();
  }
});



//routes
app.get('/', (req, res) => res.sendFile('index.html', {root: './public'}));
app.get('/about', (req, res) => res.sendFile('index.html', {root: './public'}));
app.get('/contact', (req, res) => res.sendFile('index.html', {root: './public'}));
app.get('/scholarships', (req, res) => res.sendFile('index.html', {root: './public'}));
app.get('/programs', (req, res) => res.sendFile('index.html', {root: './public'}));