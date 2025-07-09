// functions

// return types
function add(num1:number, num2:number):number{
    return num1+num2;
}

function greet(name:string):void{
    console.log(`Hi ${name}`);

}

// not good
let combineFunction : Function;
combineFunction = add;

// good practice
let combineFunction2 : (a:number, b:number)=>number;
combineFunction2 = add;
combineFunction2(2,12);


// function types and callbacks
function addHandle(num1:number, num2:number,cb: (n:number)=>void){
    const result =  num1+num2;
    cb(result)
}

let userInput : unknown; // to get any value
let userName : string;

userInput = 10;

if(typeof userInput==="string"){
    userName=userInput
}

// never return type
function generateError(message:string,code:number){
    throw {message:message, status:code}
    // while throwing error the return type is error
}

