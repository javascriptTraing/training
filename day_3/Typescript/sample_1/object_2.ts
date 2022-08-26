let object : {name:string, age:number, address: {street:number, city:string}} = {name:"john", age:23, address:{street: 12, city:'dublin'}} 
console.log(object.name, object.age, object.address.city, object.address.street)
// it is not convenient to re-create similar instance of such with above implementation