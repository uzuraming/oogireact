export class OdaiSentense {
    private sentense    
    public get value() {
        return this.sentense
    }

    static create(sentense:string){
        const isVaild = sentense.length <= 200 && sentense.length > 0
        if(isVaild){
            return new OdaiSentense(sentense)
        } else {
            throw new Error("sentenseの長さが不適切です");
        }
    }
    
    public isEqual(otherSentense:string){
        return this.sentense === otherSentense
    }

    constructor(sentense:string){
        this.sentense = sentense 
    }
}