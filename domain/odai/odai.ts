import { UserId } from "../user/values/id.value"
import { OdaiId } from "./values/id.value"
import { OdaiSentense } from "./values/sentence.value"
import { OdaiImg } from "./values/img.value"
import { OdaiDateRelease } from "./values/date_release.value"
import { OdaiDateClose } from "./values/date_close.value"
import { OdaiSterred } from "./values/starred.value"
import { OdaiTrashed } from "./values/trashed.value"
import { OdaiDate } from "./values/date.value"
import { OdaiVideoUrl } from "./values/videoUrl.value"
import { OdaiVideoEditedby } from "./values/videoEditedBy.value"
import { OdaiVideoEditedAt } from "./values/videoEditedAt.value"

export default class Odai {
    private _id
    private _sentense
    private _img
    private _user_id
    private _date
    private _date_release
    private _date_close
    private _starred
    private _trashed
    private _videoUrl
    private _videoEditedBy
    private _videoEditedAt

   

    public isFinished(){
        const now = new Date
        return this._date_close.value < now
    }

    public isExistImg(){
        return this._img !== null
    }

    public isExistVideo(){
        return this._videoUrl !== null
    }


    get id(){
        return this._id.value
    }

    get sentense(){
        return this._sentense.value
    }

    get img(){
        if(this._img === null){
            return "画像はありません"
        }else{
            return this._img.value
        }
        
    }

    get user_id(){
        return this._user_id.value
    }

    get date(){
        return this._date.value
    }

    get date_release(){
        return this._date_release.value
    }
    
    get date_close(){
        return this._date_close.value
    }

    get videoEditedBy(){
        return this._videoEditedBy.value
    }

    get trashed(){
        return this._trashed.value
    }

    get videoUrl(){
        if(this._videoUrl === null){
            return "動画はありません"
        } else{
            return this._videoUrl.value
        }
    }

    get videoEditedAt(){
        if(this._videoEditedAt === null){
            return "動画はありません"
        }
        else{
            return this._videoEditedAt
        }    
    }

    get starred(){
        return this._starred
    }


    constructor(
        id:string, 
        sentense:string, 
        img:string, 
        user_id:string, 
        date:Date,
        date_release:Date,
        date_close:Date,
        starred:boolean,
        trashed:boolean,
        videoUrl:string,
        videoEditedBy:string,
        videoEditedAt:Date
        ){

        if(date_close > date_release && date_release > date){
            this._id = OdaiId.create(id)
            this._sentense = OdaiSentense.create(sentense)
            this._user_id = UserId.create(user_id)
            this._date = OdaiDate.create(date)
            this._img = OdaiImg.create(img)
            this._date_release = OdaiDateRelease.create(date_release)
            this._date_close = OdaiDateClose.create(date_close)
            this._starred = OdaiSterred.create(starred)
            this._trashed = OdaiTrashed.create(trashed)
            this._videoUrl = OdaiVideoUrl.create(videoUrl)
            this._videoEditedBy = OdaiVideoEditedby.create(videoEditedBy)
            this._videoEditedAt = OdaiVideoEditedAt.create(videoEditedAt)
        }else{
            throw new Error("日付の時系列が異常です")
        }
        
    }
}