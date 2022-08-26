let a = 1
try {
    let no = parseInt(a.toPrecision(450))
} catch (e) {
    console.log(e.message)
    console.log(e.name)
}