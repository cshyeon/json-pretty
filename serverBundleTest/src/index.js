var path = require('path');
var express = require('express');
var app = express();


app.use( express.static(path.join(__dirname, '../../client/dist')) );

app.listen(3456, function() {
  console.log("server is running on 3456 port");
});