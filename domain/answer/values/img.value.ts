export class AnswerImg {
    private img    
    public get value() {
        return this.img
    }

    static create(img:string){
        const isVaild = img.length <= 1000 && img.length > 0
        if(isVaild){
            return new AnswerImg(img)
        } else {
            throw new Error("imgの長さが不適切です");
        }
    }
    
    public isEqual(otherImg:string){
        return this.img === otherImg
    }

    constructor(img:string){
        this.img = img 
    }
}