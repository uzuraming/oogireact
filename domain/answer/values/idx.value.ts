export class AnswerIdx {
    private idx    
    public get value() {
        return this.idx
    }

    static create(idx:number){
        const idxList =[1,2,3,4,5,6,7,8,9]
        const isVaild = idxList.includes(idx)
        if(isVaild){
            return new AnswerIdx(idx)
        } else {
            throw new Error("idxの形式が不適切です");
        }
    }
    
    public isEqual(otherIdx:number|null){
        return this.idx === otherIdx
    }

    constructor(idx:number|null){
        this.idx = idx 
    }
}