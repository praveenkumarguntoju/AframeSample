var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
var mongodb = require("mongodb");
var jwt    = require('jsonwebtoken');

var ObjectId = require('mongodb').ObjectId; 

var app = express();
app.set('superSecret', 'TestJwtToken'); // secret variable


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true ,limit: '50mb'}));


// Create link to Angular build directory
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src/app/images'));
app.use(express.static(distDir));
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

var db;
});
















