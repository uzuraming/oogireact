export class UserGender {
    private gender    
    public get value() {
        return this.gender
    }

    static create(gender:string|null){
        const genderList =[
            null,
            '男性',
            '女性',
        ]
        const isVaild = genderList.includes(gender)
        if(isVaild){
            return new UserGender(gender)
        } else {
            throw new Error("genderの形式が不適切です");
        }
    }
    
    public isEqual(otherGender:string|null){
        return this.gender === otherGender
    }

    constructor(gender:string|null){
        this.gender = gender 
    }
}