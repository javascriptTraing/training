var emp = {
    "id" : 1,
    "age" : 20
}

var even = Object.assign({}, emp, {id:2})
console.log(emp)
console.log(even)