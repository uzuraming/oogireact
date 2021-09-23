export class AnswerIsPrivate {
    private isPrivate    
    public get value() {
        return this.isPrivate
    }

    static create(isPrivate:boolean){
        return new AnswerIsPrivate(isPrivate)
    }
    
    public isEqual(otherIsPrivate:boolean){
        return this.isPrivate === otherIsPrivate
    }

    constructor(isPrivate:boolean){
        this.isPrivate = isPrivate 
    }
}