import calculator from "../code/calculator.js";

test("add 1 and 1 returns 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});
test("add 1 and 2 returns 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 1 and 1 returns 0", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});
test("subtract 2 and 1 returns 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("divide 1 and 1 returns 1", () => {
  expect(calculator.divide(1, 1)).toBe(1);
});
test("divide 2 and 1 returns 2", () => {
  expect(calculator.divide(2, 1)).toBe(2);
});

test("multiply 2 and 2 returns 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
test("multiply 4 and 4 returns 16", () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});
