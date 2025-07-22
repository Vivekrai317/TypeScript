// classes and objects
class Device{
    
}

let d1 = new Device();

// class BottleMaker{
//     name;
//     price;
//     constructor(name:string,price:number){
//         this.name = name;
//         this.price = price;
//     }
// }
class BottleMaker{
    constructor(public name:string,price:number){
    }
}

new BottleMaker("Milton",1200)

class abcd{
    name = "tv";
    changeName(){
        this.name = "vv";
    }
}

// access modifiers -> public private protected
let a = new abcd();

//if we dont want anything to change then add readonly
class User{
    constructor(public readonly name:string){

    }
    changeName(){
        // this.name="new name" // now shows error because of readonly
    }
}

// if add ? then we can add optional parameters
// eg. public name:string public gender?:string

class User2{
    constructor(public _name:string, public _age:number){

    }

    get name(){
        return this._name;
    }
    set name(name:string){
        this._name=name;
    }
}

// if static keyword is used then we dont need to create a new instance and can be accessed directly ie bina instance bnaye

let x = abcd;
