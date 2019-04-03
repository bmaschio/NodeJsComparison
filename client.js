var request = require('request');

var propertiesObject = { name:'John', surname :'Green', age: 41 };
var url = "http://localhost:8000/myOp"
request({url:url, qs:propertiesObject}, function(err, response, body) {
  if(err) { console.log(err); return; }
  console.log("Get response: " + body);
});
