let pattern = /jpmc/
let insensitivePatter = /jpmc/i
console.log('this happens in jpmc'.search(pattern))
console.log('this happens in JPMC'.search(insensitivePatter))