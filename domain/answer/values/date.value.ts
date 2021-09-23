export class OdaiDate {
    private date_release    
    public get value() {
        return this.date_release
    }

    static create(date_release:Date){
        return new OdaiDate(date_release)
    }
    
    public isEqual(otherdate_release:Date){
        return this.date_release === otherdate_release
    }

    constructor(date_release:Date){
        this.date_release = date_release 
    }
}