export class OdaiDateClose {
    private date_close    
    public get value() {
        return this.date_close
    }


    static create(date_close:Date){
        return new OdaiDateClose(date_close)
    }
    
    public isEqual(otherdate_close:Date){
        return this.date_close === otherdate_close
    }

    constructor(date_close:Date){
        this.date_close = date_close 
    }
}