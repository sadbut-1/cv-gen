var express = require('express');
var bodyParser = require('body-parser');

var app = express(); //Inicia o framework Express

app.use(bodyParser.json());

module.exports = app;