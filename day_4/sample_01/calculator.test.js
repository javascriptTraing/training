var CALCULARTOR = require('./calculator')

describe("testing the calculator functionality", () => {
   test("testing the sum functionality", () => {
    let result = CALCULARTOR.sum(1,2)
    expect(result).toBe(3)
   })
   test("testing the diff functionality", () => {
      let result = CALCULARTOR.diff(3,2)
      expect(result).toBe(1)
   })
   test("testing the product functionality", () => {
      let result = CALCULARTOR.product(3,2)
      expect(result).toBe(6)
   })
   // to skip a test we can put 'x' before test
   xtest("testing the div functionality", () => {
      let result = CALCULARTOR.div(6,2)
      expect(result).toBe(3)
   })
})