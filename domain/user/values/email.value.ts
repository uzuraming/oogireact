export class UserEmail {
    private email    
    public get value() {
        return this.email
    }


    static create(email:string){
        const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        const isVaild = regex.test(email)
        if(isVaild){
            return new UserEmail(email)
        } else {
            throw new Error("emailの形式が不適切です");
        }
    }
    
    public isEqual(otherEmail:string){
        return this.email === otherEmail
    }

    constructor(email:string){
        this.email = email 
    }
}