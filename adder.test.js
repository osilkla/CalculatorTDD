const { expect } = require("@jest/globals")
 const sum = require("./adder")

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('should return the number if one arg is passed', () => {
  expect(sum(1)).toBe(1);
});
 