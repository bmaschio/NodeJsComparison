var express = require('express');
var myHttpPort = express();
var xml = require('xml');



myHttpPort.get('/myOp', function (request, response) {
  var query =request.query;
  var resVariable = {iAm: "I'am " + query.name + " " + query.surname + " and I will  "  + (query.age +1)}
  response.set('Content-Type', 'text/xml');
  response.send(xml(resVariable));
});

myHttpPort.listen(8000)
