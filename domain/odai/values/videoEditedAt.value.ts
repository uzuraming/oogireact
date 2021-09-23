export class OdaiVideoEditedAt {
    private videoEditedAt    
    public get value() {
        return this.videoEditedAt
    }

    static create(videoEditedAt:Date){
        return new OdaiVideoEditedAt(videoEditedAt)
    }
    
    public isEqual(otherVideoEditedAt:Date){
        return this.videoEditedAt === otherVideoEditedAt
    }

    constructor(videoEditedAt:Date){
        this.videoEditedAt = videoEditedAt 
    }
}