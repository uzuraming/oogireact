export class OdaiTrashed {
    private trashed    
    public get value() {
        return this.trashed
    }

    static create(trashed:boolean){
        return new OdaiTrashed(trashed)
    }
    
    public isEqual(otherTrashed:boolean){
        return this.trashed === otherTrashed
    }

    constructor(trashed:boolean){
        this.trashed = trashed 
    }
}