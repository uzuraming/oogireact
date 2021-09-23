export class OdaiId {
    private id    
    public get value() {
        return this.id
    }


    static create(id:string){
        const isVaild = id.length <= 100 && id.length > 0
        if(isVaild){
            return new OdaiId(id)
        } else {
            throw new Error("idの長さが不適切です");
        }
    }
    
    public isEqual(otherId:string){
        return this.id === otherId
    }

    constructor(id:string){
        this.id = id 
    }
}