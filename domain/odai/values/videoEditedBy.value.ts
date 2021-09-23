export class OdaiVideoEditedby {
    private videoEditedBy    
    public get value() {
        return this.videoEditedBy
    }

    static create(videoEditedBy:string){
        const isVaild = videoEditedBy.length <= 200 && videoEditedBy.length > 0
        if(isVaild){
            return new OdaiVideoEditedby(videoEditedBy)
        } else {
            throw new Error("videoEditedByの長さが不適切です");
        }
    }
    
    public isEqual(otherVideoEditedBy:string){
        return this.videoEditedBy === otherVideoEditedBy
    }

    constructor(videoEditedBy:string){
        this.videoEditedBy = videoEditedBy 
    }
}