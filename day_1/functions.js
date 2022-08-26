// functions are reusable units
// it makes code modular
function add(a, b) {
    console.log(a + b)
}
add(20,20)

// a function that can return a result
function square(x){
    return x*x
}
console.log(square(4))

var sum = function(a,b) {
    console.log(a + b)
}

sum(1,2)
var sub = function(a, b) {
    console.log(a - b)
}

function perform(a,b,operation) {
    operation(a,b)
}

perform(1,2,sub)
perform(1,2,sub)