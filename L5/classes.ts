class Department{
    name:string;
    constructor (n:string){
        this.name = n;
    }
    describe(){
        console.log(this.name);
        
    }

}

const accounting = new Department("Accounts")
accounting.describe(); 