export class OdaiVideoUrl {
    private videoUrl    
    public get value() {
        return this.videoUrl
    }

    static create(videoUrl:string){
        const isVaild = videoUrl.length <= 200 && videoUrl.length > 0
        if(isVaild){
            return new OdaiVideoUrl(videoUrl)
        } else {
            throw new Error("videoUrlの長さが不適切です");
        }
    }
    
    public isEqual(otherVideoUrl:string){
        return this.videoUrl === otherVideoUrl
    }

    constructor(videoUrl:string){
        this.videoUrl = videoUrl 
    }
}