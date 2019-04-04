type myOpRequest:void{
   .name:string
   .surname:string
   .age:int
}

type myOpResponse:void{
   .iam:string
}

interface MySimpleInterface {
 RequestResponse:
  myOp(myOpRequest)(myOpResponse)
}

type myOp1Request:any{
   .name:string
   .surname:string
}

type myOp1Response:void{
   .hello:string
}

interface MySecondInterface {
 RequestResponse:
  myOp1(myOp1Request)(myOp1Response)
}

  inputPort myHttpPort{
     Location:"socket://localhost:8000"
     Protocol:http{
          .format -> format;
          .contentType -> mime
     }
     Interfaces:MySimpleInterface

  }

  inputPort mySecondHttpPort{
     Location:"socket://localhost:8001"
     Protocol:http{
          .format -> format;
          .contentType -> mime
     }
     Interfaces:MySecondInterface

  }
  execution{ concurrent }
  main{
      [myOp(request)(response){
        response.iam = "I'am "+ request.name + " " + request.surname + " and I am  " + (request.age +1);
        mime = "application/json";
        format = "json"
     }]

     [myOp1(request)(response){
       response.hello = "Hello "+ request.name + " " + request.surname
    }]
  }
