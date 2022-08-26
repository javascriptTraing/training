let a = []
console.log(a,typeof a)
console.log(Array.isArray(a))
// index of arry in javascript always starts with 0
a.push(20)
a.push(10)
console.log(a)
console.log(a.length)
console.log(a[0],a[1])
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}
// sometimes we might want to apply same function on each and every element of a given Array
// we can achieve it via the help of map() function
let b = a.map(data => data*data)
console.log(b)
let c = a.filter(data => data > 10)
console.log(c)