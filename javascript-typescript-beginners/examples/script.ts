let myName: number = 5;
myName = 3;
const aNumber = 5; //hardcoded value cannot be changed

let aStringOrANumber: string | number = "";
aStringOrANumber = 3;

let aStringOrANumberOrBoolean: string | number | boolean = "";
aStringOrANumberOrBoolean = true;

//to make a let be a constant in ts:
let nameOfTheUser: "peter" = "peter";
const isCompleted = true;


let gift;
console.log(gift);
 //