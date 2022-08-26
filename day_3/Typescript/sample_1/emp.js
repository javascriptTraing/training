"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emp = void 0;
class Emp {
    constructor(name, age, salary, disgnation = 'worker') {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.disgnation = disgnation;
    }
    // within class we don't use function keyword
    display() {
        if (this.disgnation)
            console.log(`name:${this.name} age:${this.age} salary:${this.salary} disgnation:${this.disgnation}`);
        else {
            console.log(`name:${this.name} age:${this.age} salary:${this.salary}`);
        }
    }
}
exports.Emp = Emp;
