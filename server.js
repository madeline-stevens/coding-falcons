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
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/public/about.html'));
app.get('/contact', (req, res) => res.sendFile(__dirname + 'public/contact.html'));
app.get('/scholarships', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/programs', (req, res) => res.sendFile(__dirname + '/index.html'));

