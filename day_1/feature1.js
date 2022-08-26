// arrow functions: providing a simple way for writting functions
// arrow functions make it easier to use a function within another function
// rules: 1) if there is no parameter within a given function then we have to pass empty ()
// 2), if there is single parameter then no need of round bracket
// 3) if there are more than 1 parameter then round bracket is required
//general syntax 
// variable = parameter => {body}
// 4) if there is only a single statement in the body then no need of curly brackets and no need of return statement.
// arrow functions are auto bindable

var hello = () => {console.log("hello")}
hello()

var square = n => n*n
console.log(square(3))

var sum = (a,b) => a + b
console.log(sum(40,50))

var sample = () => {
    console.log("hello")
    console.log("hello again")
}
sample()