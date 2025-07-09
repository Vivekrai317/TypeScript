console.log("This is L3");
// union, literal types, type alias/custom types

let firstName : string = "Patel";
let age : number = 21;

const person : {
    firstName : string;
    age:number;
} = {
    firstName : "Patel",
    age:22
}


// union - > | pipe in typescript -> useful if we want to use either number or string for the same argument ie when we want to use options ie OR functionality
// function combine ( num1:number | string,num2:number|string){
//     let result;
//     if(typeof num1 === "number" && typeof num2 ==="number"){
//         result = num1 + num2;
//     }
//     else{
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// }
// const sum = combine(10,20);
// const combinedName = combine("Tv", "rai")
// console.log(sum,combinedName);

// Literal types -> user defined type

function combine ( num1:number | string,num2:number|string, conversionType : "as-number" | "as-string"){
    let result;
    if(typeof num1 === "number" && typeof num2 ==="number"){
        result = num1 + num2;
    }
    else{
        result = num1.toString() + num2.toString();
    }
    return result;
}

const sum = combine(10,20,"as-number")
const combined = combine("Tv","Rai","as-string")


// custom type or type alias 
type Combinable = number|string;
type ConversionType = "as-number" | "as-string";

type User = {
    name:string,
    age:number
}
const user : User={
    name:"Tv",
    age:22
} //more readable

