var express = require('express');
var myHttpPort = express();
var mySecondHttpPort = express();
var xml = require('xml');
const {buildSanitizeFunction} = require('express-validator/filter');
const sanitizeBodyAndQuery = buildSanitizeFunction(['query']);
const {check,validationResult} = require('express-validator/check');



myHttpPort.get('/myOp', [check("name").exists(),
                         check("surname").exists(),
                         check("age").exists(),
                         check("age").isInt(),
                         sanitizeBodyAndQuery('age').toInt()],
function(request, response) {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(422).json({
      errors: errors.array()
    });
  }
  var query = request.query;
  var resVariable = {
    iam: "I'am " + query.name + " " + query.surname + " and I will  " + (query.age + 1)
  }
  console.log(resVariable);
  //response.set('Content-Type', 'text/xml');
  response.send(resVariable);
});


mySecondHttpPort.get('/myOp1', [check("name").exists(),
                         check("surname").exists(),
                         ],
function(request, response) {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(422).json({
      errors: errors.array()
    });
  }
  var query = request.query;
  var resVariable = {
    hello: "hello " + query.name + " " + query.surname
  }
  response.set('Content-Type', 'text/xml');
  response.send(xml(resVariable));
});

myHttpPort.listen(8000);
mySecondHttpPort.listen(8001)
