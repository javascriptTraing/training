export class Emp {
    name: string
    age: number
    salary: number
    disgnation?: string // union type implys that a varible can have type1, type2, ... typeN

    constructor(name: string, age: number, salary: number, disgnation: string = 'worker') {
        this.name = name
        this.age = age
        this.salary = salary
        this.disgnation = disgnation
    }
    // within class we don't use function keyword
    display() {
        if (this.disgnation)
            console.log(`name:${this.name} age:${this.age} salary:${this.salary} disgnation:${this.disgnation}`)
        else {
            console.log(`name:${this.name} age:${this.age} salary:${this.salary}`)

        }
    }
}