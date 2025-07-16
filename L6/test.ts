// provides type safety
// var a=12;

// basic types lets goo

// datatype-> primitives and reference
// [] () {} ->reference if any changes done then will be reflected in parent

// var , let , const in js 
// use only let and const 
let a = 12;

let arr : number[] = [1,2,3]; // array of string|number
let tuple : [string,number]=["tv",21] // fixed size and position of types available i.e. fixed ordering
//enumerations
enum userRoles{
    ADMIN = "admin",
    GUEST = "guest"
}
//we can use key value pairs  ie. for using some predefined values or set of rules 
userRoles.ADMIN

// any, unknown, void, null, undefined, never
let b : number;
b=21;

// any -> variable is defined but its type is not eg let a;
// unknown -> narrowing concept
// void 
function abcd():void{
    console.log("no return");
}

// null 
let n:string|null;
// undefined -> if no value is provided

// never -> when throwing error

// type inference
// type annotations -> predefinition of types
let x : string | number | boolean;

// interfaces and alias
// interface -> shape
function abc(a:number,b:string){
    
}

interface User{
    name:string,
    email:string,
    age:number,
    gender?:string 
    // "?" defines optional
}


function getUserDetails(obj:User){ //obj ki shakal interface user ke jaisi honi chahiye the argument and interface is coupled
    
}
getUserDetails({
    name:"tv",
    email:"tvrai",
    age:21
});

// extending interfaces
interface Admin extends User{
    admin:boolean;
}
// admin will have all attributes of User + the attributes of its own
function fun(obj:Admin){
    obj.admin
}

// two interfaces of same name is always merged together

interface abcd{
    name:string;
}
interface abcd{
    email:string;
}
// both will be merged whenever abcd is used

// type aliases
type sankhya = number;
// let tx : number | string |null;
// instead we can alias the type as 
type txValue = number|string|null;
let tx :txValue;

// intersection types -> 
//  | -> union 
// intersection 
type Usertype = {
    name : string,
    email : string,
}