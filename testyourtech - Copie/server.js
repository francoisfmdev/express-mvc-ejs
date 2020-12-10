// appelle de fichier http
const http = require('http');
// appelle de fichier express
const express = require('express');
// appelle fichier mongoose 
const mongoose = require('mongoose');

// creation constante app à partir express
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

// Utilisation d'un middleware pour récuperer lebod d'une requete
const bodyParser = require('body-parser');
const { json } = require('express');
//Définition du port utilisé 
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

const siteroutes = require('./routes/site');

app.use('/site', siteroutes);

//ecoute du sur le port 
app.listen(process.env.PORT || 3000);
