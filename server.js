// import express as app from 'express'

// app.use(app.static('./public'))

var express = require('express');

var app = express();
var port = process.env.PORT || 3000

app.use(express.static('./public/views'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(port);
console.log('Server is running at http://localhost:' + port);
