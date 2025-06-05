// object, array, tuple, enum
console.log("Objects...");
var person = {
    firstName: "Patel",
    age: 21,
    skills: ["Reactjs", "Nodejs"]
};
// if property does not exists and we still try to access it then we get undefined
var favLanguage;
favLanguage = ["Hindi", "English"];
favLanguage[1] = "Sanskrit";
console.log(favLanguage);
