const { expect } = require("@jest/globals")
 const multiply = require("./multiply")

test('multiply 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});
test('should return the number if one arg is passed', () => {
  expect(multiply(1)).toBe(1);
});
test('should be able to multiply 3 numbers', () => {
  expect(multiply(1,2,3)).toBe(6);
});
test('should return 0 if one number is 0', () => {
  expect(multiply(1,2,3,0)).toBe(0);
});