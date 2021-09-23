export class AnswerNote {
    private note    
    public get value() {
        return this.note
    }

    static create(note:boolean){
        return new AnswerNote(note)
    }
    
    public isEqual(otherNote:boolean){
        return this.note === otherNote
    }

    constructor(note:boolean){
        this.note = note 
    }
}