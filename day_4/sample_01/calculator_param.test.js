var CALCULARTOR = require('./calculator')

describe("parameter calculator testing", () => {
    test.each([[2,1,3],[5,2,7]])(
        'sum of %i and %i is %i', (ip1, ip2, op) => {
            expect(CALCULARTOR.sum(ip1,ip2)).toBe(op)
        } 
    )
    test.each([[2,1,1],[5,2,3],[300,199,101]])(
        'diff of %i and %i is %i', (ip1, ip2, op) => {
            expect(CALCULARTOR.diff(ip1,ip2)).toBe(op)
        } 
    )
    test.each([[2,1,2],[5,2,10]])(
        'product of %i and %i is %i', (ip1, ip2, op) => {
            expect(CALCULARTOR.product(ip1,ip2)).toBe(op)
        } 
    )
    test.each([[2,1,2],[6,2,3]])(
        'div of %i and %i is %i', (ip1, ip2, op) => {
            expect(CALCULARTOR.div(ip1,ip2)).toBe(op)
        } 
    )

})