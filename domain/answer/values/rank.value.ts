export class AnswerRank {
    private rank    
    public get value() {
        return this.rank
    }

    static create(rank:number){
        const rankList =[1,2,3,4,5,6,7,8,9]
        const isVaild = rankList.includes(rank)
        if(isVaild){
            return new AnswerRank(rank)
        } else {
            throw new Error("rankの形式が不適切です");
        }
    }
    
    public isEqual(otherRank:number){
        return this.rank === otherRank
    }

    constructor(rank:number){
        this.rank = rank 
    }
}