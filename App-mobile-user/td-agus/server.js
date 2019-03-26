// Appel des dépendances et des packages externes

var express = require('express');   
var app = express();
app.use(express.static(__dirname + '/views')); 
app.use(express.static(__dirname + '/model')); 

var routerListe= require('./routes/routeListe')
var dataLayerListe = require('./model/dataLayerListe');

var morgan = require('morgan');
var bodyParser = require('body-parser');


// Initialisation : 
app.use(morgan('dev')); 
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json({ type : 'application/vnd.api+json' })); //type de l'application
app.use(routerListe);



// Start the application after the connexion to Database established : 
dataLayerListe.init(function() {
    console.log('Inited on port 8080');
    app.listen(8080);
});

