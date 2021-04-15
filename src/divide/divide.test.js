const { expect } = require("@jest/globals")
 const divide = require("./divide")

test('divide 1 / 2 to equal 0.5', () => {
  expect(divide(1, 2)).toBe(0.5);
});
test('should return the number if one arg is passed', () => {
  expect(divide(1)).toBe(1);
});

test('should throws an error if divide by 0', () => {
  function divideBy0() {
    divide(1,2,0);
  }
  expect(divideBy0).toThrowError(new Error("can't divide by 0"));
});

test('should be able to divide 3 numbers', () => {
  expect(divide(10,2,2)).toBe(2.5);
});