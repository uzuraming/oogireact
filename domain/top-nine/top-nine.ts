import Answer from "../answer/answer"
import { OdaiId } from "../odai/values/id.value"


export default class TopNine extends Array<Answer>{
    private odaiId

    public isVaildLength(){
        return length <=9 && length > 0
    }
    public downIdx(idx:number){
        if(idx < 8){
            const current_answer = this[idx]
            const next_answer = this[idx + 1]

            this[idx] = next_answer
            this[idx + 1] = current_answer
        }

    }
    public upIdx(idx:number){
        if(idx > 0){
            const current_answer = this[idx]
            const prev_answer = this[idx + 1]

            this[idx] = prev_answer
            this[idx - 1] = current_answer
        }

    }

    public orderByRate(){
        this.sort((a, b) => a.voted.value - b.voted.value)
        return this
    }

    constructor(id:OdaiId){
        super(length)
        this.odaiId = id
    }
}