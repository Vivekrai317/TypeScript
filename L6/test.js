"use strict";
// provides type safety
// var a=12;
// basic types lets goo
// datatype-> primitives and reference
// [] () {} ->reference if any changes done then will be reflected in parent
// var , let , const in js 
// use only let and const 
let a = 12;
let arr = [1, 2, 3]; // array of string|number
let tuple = ["tv", 21]; // fixed size and position of types available i.e. fixed ordering
//enumerations
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
})(userRoles || (userRoles = {}));
//we can use key value pairs  ie. for using some predefined values or set of rules 
userRoles.ADMIN;
// any, unknown, void, null, undefined, never
let b;
b = 21;
// any -> variable is defined but its type is not eg let a;
// unknown -> narrowing concept
// void 
function abcd() {
    console.log("no return");
}
// null 
let n;
// undefined -> if no value is provided
// never -> when throwing error
// type inference
// type annotations -> predefinition of types
let x;
// interfaces and alias
// interface -> shape
function abc(a, b) {
}
function getUserDetails(obj) {
}
getUserDetails({
    name: "tv",
    email: "tvrai",
    age: 21
});
