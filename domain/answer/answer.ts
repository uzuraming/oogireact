import { AnswerId } from "./values/id.value"
import { AnswerSentense } from "./values/sentence.value";
import { AnswerDate } from "./values/date.value";
import { AnswerImg } from "./values/img.value";
import { AnswerVoted } from "./values/voted.value";
import { AnswerIdx } from "./values/idx.value";
import { AnswerRank } from "./values/rank.value";
import { AnswerNote } from "./values/note.value";
import { AnswerFav } from "./values/fav.value";
import { AnswerIsPrivate } from "./values/private.value";

export default class Answer {
    private _id
    private _sentence
    private _date
    private _img
    private _voted
    private _idx
    private _rank
    private _note
    private _fav
    private _isPrivate

    get id(){
        return this._id
    }

    get sentence(){
        return this._sentence
    }

    get date(){
        return this._date
    }

    get img(){
        return this._img
    }

    get voted(){
        return this._voted
    }

    get idx(){
        return this._idx
    }

    get rank(){
        return this._rank
    }

    get note(){
        return this._note
    }

    get fav(){
        return this._fav
    }

    get isPrivate(){
        return this._isPrivate
    }

    constructor(
        id:string,
        sentence:string,
        date:Date,
        img:string,
        voted:number,
        idx:number,
        rank:number,
        note:boolean,
        fav:boolean,
        isPrivate:boolean
    ){
        this._id = AnswerId.create(id)
        this._sentence = AnswerSentense.create(sentence)
        this._date = AnswerDate.create(date)
        this._img = AnswerImg.create(img)
        this._voted = AnswerVoted.create(voted)
        this._idx = AnswerIdx.create(idx)
        this._rank = AnswerRank.create(rank)
        this._note = AnswerNote.create(note)
        this._fav = AnswerFav.create(fav)
        this._isPrivate = AnswerIsPrivate.create(isPrivate)

    }
}