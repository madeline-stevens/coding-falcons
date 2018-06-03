'use strict';
//setting up our npm stuff and creating app and client

const express = require('express');
// const pg = require('pg');
const cors = require('cors');
const PORT= process.env.PORT || 3000;
const app = express();
// const conString = process.env.DATABASE_URL;
// const client =  new pg.Client(conString);

app.listen(PORT, () => console.log(`Listening on port 3000`));
// client.on('error', err => console.error(err));
app.use(cors());
app.use(express.static('./public'));



//routes
app.get('/', (req, res) => res.sendFile('index.html', {root: './public'}));
app.get('/about', (req, res) => res.sendFile('index.html', {root: './public'}));
app.get('/contact', (req, res) => res.sendFile('index.html', {root: './public'}));
app.get('/scholarships', (req, res) => res.sendFile('index.html', {root: './public'}));
app.get('/programs', (req, res) => res.sendFile('index.html', {root: './public'}));