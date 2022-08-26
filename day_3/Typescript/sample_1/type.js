"use strict";
let a1 = { street: 1, city: 'dublin' };
let u1 = { name: 'john', age: 30, address: a1 };
let u2 = { name: 'jonny', age: 39, address: a1 };
console.log(u1.name, u1.age, u1.address.city, u1.address.street);
console.log(u2.name, u2.age, u2.address.city, u2.address.street);
console.log(u1);
console.log(u2);
