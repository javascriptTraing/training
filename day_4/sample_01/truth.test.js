describe("testing the calculator functionality", () => {
    test('test for truth values', () => {
        var name="Software testing help"
        var n = null
        expect(n).toBeNull()
        expect(name).not.toBeNull
  
        // name has a valid value
        expect(name).toBeTruthy()
        // fail - as null is non success
        // expect(n).toBeTruthy()
        
        // pass - null treated as false or negative
        // expect(n).toBeFalsy()
    
        // 0 - treated as false
        expect(0).toBeFalsy()
    })
    
    test('Numeric operators', ()=>{
        let n1 = 100
        let n2 = -30
        let n3 = 0
        expect(n1).toBeGreaterThanOrEqual(20)
        expect(n2).toBeLessThanOrEqual(0)
        expect(n3).toBe(0)
    })
    
    test('String operators', () => {
        let sample = 'Testing is important'
        expect(sample).toMatch(/Test/)
        expect(sample).not.toMatch(/hello/)
    })
  

})