export class AnswerVoted {
    private voted    
    public get value() {
        return this.voted
    }

    static create(voted:number){
        const isVaild = voted <= 100 && voted >= 0
        if(isVaild){
            return new AnswerVoted(voted)
        } else {
            throw new Error("votedの形式が不適切です");
        }
    }
    
    public isEqual(otherVoted:number){
        return this.voted === otherVoted
    }

    constructor(voted:number){
        this.voted = voted 
    }
}