export class OdaiSterred {
    private starred    
    public get value() {
        return this.starred
    }

    static create(starred:boolean){
        return new OdaiSterred(starred)
    }
    
    public isEqual(otherStarred:boolean){
        return this.starred === otherStarred
    }

    constructor(starred:boolean){
        this.starred = starred 
    }
}