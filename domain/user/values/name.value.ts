export class UserName {
    private name    
    public get value() {
        return this.name
    }


    static create(name:string){
        const isVaild = name.length <= 100 && name.length > 0
        if(isVaild){
            return new UserName(name)
        } else {
            throw new Error("nameの長さが不適切です");
        }
    }
    
    public isEqual(otherName:string){
        return this.name === otherName
    }

    constructor(name:string){
        this.name = name 
    }
}