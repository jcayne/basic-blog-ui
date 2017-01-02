// Based on the Express JS tutorial
var express = require('express');
var path = require('path');

var app = express();

app.use('/', express.static(path.join(__dirname, '/public'), {redirect: false}));

var PORT = process.env.PORT ? process.env.PORT : 3000;
app.listen(PORT, function(){
  console.log('The server has started.');
});
