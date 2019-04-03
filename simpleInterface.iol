type myOpRequest:void{
   .name:string
   .surname:string
   .age:int
}

type myOpResponse:any{
   .iam:string
}

interface MySimpleInterface {
 RequestResponse:
  myOp(myOpRequest)(myOpResponse)
}

type myOp1Request:void{
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
