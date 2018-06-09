'use strict';
//setting up our npm stuff and creating app and client

const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');
const PORT= process.env.PORT || 3000;
const conString = process.env.DATABASE_URL;
const client =  new pg.Client(conString);

// var path = require('path');
client.connect();
client.on('error', err => console.error(err));
app.listen(PORT, () => console.log(`Listening on port 3000`));
client.on('error', err => console.error(err));
app.use(cors());
// app.use(bodyParser.json());
app.use(express.static('./public'));



//routes
// app.get('/', (req, res) => res.sendFile('index.html', {root: './public'}));


//in my example there are just the following section IDs in index but the only example is for querying a sql database.... 

app.get('/about', (req, res) => res.sendFile('index.html', {root: './public'}));
app.get('/contact', (req, res) => res.sendFile('index.html', {root: './public'}));
// app.get('/scholarships', (req, res) => res.sendFile('index.html', {root: './public'}));
// app.get('/programs', (req, res) => res.sendFile('index.html', {root: './public'}));

