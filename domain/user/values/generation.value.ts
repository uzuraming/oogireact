export class UserGeneration {
    private generation    
    public get value() {
        return this.generation
    }

    static create(generation:string|null){
        const generationList =[
            null,
            '10',
            '20',
            '30',
            '40',
            '50',
            '60',
            '70',
            '80',
            '90',
            '100'
        ]
        const isVaild = generationList.includes(generation)
        if(isVaild){
            return new UserGeneration(generation)
        } else {
            throw new Error("generationの形式が不適切です");
        }
    }
    
    public isEqual(otherGeneration:string|null){
        return this.generation === otherGeneration
    }

    constructor(generation:string|null){
        this.generation = generation 
    }
}