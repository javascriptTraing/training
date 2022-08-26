interface SampleAddress {street:number, city:string}
interface SampleUser {name:string, age:number, address:SampleAddress}

let a2 : SampleAddress = {street: 222, city: 'Dublin'}
let u1a : SampleUser = {name: 'john', age: 30, address: a2}
let u2a : SampleUser = {name: 'jonny', age: 39, address: a2}
console.log(u1a)
console.log(u2a)