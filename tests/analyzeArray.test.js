import analyzeArray from "../code/analyzeArray.js";

const array1 = [4, 3, 6, 1, 10, 15, 2];
const array2 = [20, 3, 4, 1, 3, 5, 18];

console.log({ array1, array2 });

test("average of array1 to be 5.85714", () => {
  expect(analyzeArray(array1).average).toBeCloseTo(5.85714);
});
test("average of array2 to be 7.71428", () => {
  expect(analyzeArray(array2).average).toBeCloseTo(7.71428);
});

test("min of array1 to be 1", () => {
  expect(analyzeArray(array1).min).toBe(1);
});
test("min of array2 to be 1", () => {
  expect(analyzeArray(array2).min).toBe(1);
});

test("max of array1 to be 15", () => {
  expect(analyzeArray(array1).max).toBe(15);
});
test("max of array2 to be 20", () => {
  expect(analyzeArray(array2).max).toBe(20);
});

test("length of array1 to be 7", () => {
  expect(analyzeArray(array1).length).toBe(7);
});
test("length of array2 to be 7", () => {
  expect(analyzeArray(array2).length).toBe(7);
});
