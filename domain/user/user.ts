import { UserId } from "./values/id.value";
import { UserName } from "./values/name.value";
import { UserEmail } from "./values/email.value";
import { UserGender } from "./values/gender.value";
import { UserGeneration } from "./values/generation.value";


export default class User {
    private _id
    private _name
    private _email
    private _gender
    private _generation

    public get id(){
        return this._id.value
    }
    
    public get name() {
        return this._name.value
    }

    public get gender() {
        if(this._gender){
            return this._gender.value
        }else{
            return "性別非公開"
        }
    }

    public get generation() {
        if(this._generation){
            return this._generation.value
        }else{
            return "年代非公開"
        }
    }

    public get email() {
        return this._email.value
    }

    constructor(id:string, name:string, email:string, gender:string, generation:string){
        this._id = UserId.create(id)
        this._name = UserName.create(name)
        this._email = UserEmail.create(email)
        this._gender = UserGender.create(gender)
        this._generation = UserGeneration.create(generation)
        
    }
    

    
}