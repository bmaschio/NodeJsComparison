include "simpleInterface.iol"


outputPort myHttpPort{
   Location:"socket://localhost:8000"
   Protocol:http{
        .debug= true;
        .debug.showContent= true;
        .method = "GET"
   }
   Interfaces:MySimpleInterface

}


main{
  req.name = "John";
  req.surname ="Green";
  req.age = 41;
  myOp@myHttpPort(req)(response)

}
