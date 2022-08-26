let obj1 = {} //empty obj
console.log(obj1)
obj1['name'] = 'John'
obj1['age'] = 22
console.log(obj1) // Array can only use number as index
// object can use both number and non-number as index
let obj2 = {'name' : 'John', 'address' : {'state' : 'AZ', 'country' : 'US'}}
console.log(obj2.name)
console.log(obj2.address.country)
let obj3 = {'name':'John', 'age' : 25}
for (let property in obj2) {
    console.log(property)
}
console.log(obj3['name'])
console.log(obj3['gender'])