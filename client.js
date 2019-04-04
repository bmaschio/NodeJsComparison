var request = require('request');

 function booking(request){
   var propertiesObject = { name:John , surname: Surname , date:'2019-01-01' };
   var url = "http://localhost:8000/booking"
   request({url:url, qs:propertiesObject}, function(err, response, body) {
     if(err) { console.log(err); return; }
     var res = JSON.parse(body)
     console.log("ageOK: " + res.ageOK);
   });

 }
var propertiesObject = { age: 13 };
var url = "http://localhost:8000/checkAge"
request({url:url, qs:propertiesObject}, function(err, response, body) {
  if(err) { console.log(err); return; }
  var res = JSON.parse(body)
  console.log("ageOK: " + res.ageOK);
});
