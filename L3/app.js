console.log("This is L3");
// union, literal types, type alias/custom types
var firstName = "Patel";
var age = 21;
var person = {
    firstName: "Patel",
    age: 22
};
// union - > | pipe in typescript -> useful if we want to use either number or string for the same argument
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum = combine(10, 20);
var combinedName = combine("Tv", "rai");
console.log(sum, combinedName);
