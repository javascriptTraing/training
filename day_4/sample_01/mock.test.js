var app = require("./app");
var math = require("./math");

// mocking the add 
math.add = jest.fn();
math.subtract = jest.fn();

test('mocking test cases', () => {
    app.doAdd(1,2)
    expect(math.add).toHaveBeenCalledWith(1,2)
})