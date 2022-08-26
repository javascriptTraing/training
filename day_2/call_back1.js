function square(m) {
    console.log(m*m)
}

function cube(m) {
    console.log(m*m*m)
}

function perform(a, callback) {
    console.log('input passed is ', a)
    callback(a)
}

perform(20, square)
perform(30, cube)