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

  inputPort myHttpPort{
     Location:"socket://localhost:8000"
     Protocol:http{
          .format -> format;
          .contentType -> mime
     }
     Interfaces:MySimpleInterface

  }
  execution{ concurrent }
  main{
      [myOp(request)(response){
        response.iam = "I'am "+ request.name + " " + request.surname + " and I am  " + (request.age +1)
     }]
  }
