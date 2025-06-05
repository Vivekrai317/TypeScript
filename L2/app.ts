// object, array, tuple, enum
console.log("Objects...");

const person :{
    firstName : string;
    age : number;
    skills:string[];
} = {
    firstName:"Patel",
    age:21,
    skills : ["Reactjs","Nodejs"]
};

// if property does not exists and we still try to access it then we get undefined


let favLanguage : string[];
favLanguage = ["Hindi" , "English"]
favLanguage[1] = "Sanskrit";

//to store any type of data
let favLanguage2 : any[];

// console.log(favLanguage);

// tuple -fixed array of types in given order
const product : {
    productId :[number,string]
}={
    productId : [12,"mekbook"]
}