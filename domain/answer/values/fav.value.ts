export class AnswerFav {
    private fav    
    public get value() {
        return this.fav
    }

    static create(fav:boolean){
        return new AnswerFav(fav)
    }
    
    public isEqual(otherFav:boolean){
        return this.fav === otherFav
    }

    constructor(fav:boolean){
        this.fav = fav 
    }
}