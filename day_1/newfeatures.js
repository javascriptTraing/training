class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    display = () => {
        console.log(this.name, this.age)
    }
}

let b1 = new Person('John' ,30)
b1.display()

