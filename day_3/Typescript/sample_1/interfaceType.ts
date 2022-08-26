type commonDetails = {name:string, age:number}
type email = {email:string}
type emailDetails = commonDetails & email
let e1 : emailDetails = {name: 'John', age: 40, email:'myemail@test.com'}

interface userWithEmail extends commonDetails {email:string}
let e2 : userWithEmail = {name: 'Johns', age: 41, email:'my33333email@test.com'}

console.log(e1)
console.log(e2)