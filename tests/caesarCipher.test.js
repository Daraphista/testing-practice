import caesarCipher from "../code/caesarCipher.js";

const string = "caesar";

test("az becomes with a shift key of 1 ba", () => {
  expect(caesarCipher("az", 1)).toBe("ba");
});

test("caesar becomes caesar with a shift key of 0", () => {
  expect(caesarCipher(string, 0)).toBe("caesar");
});

test("caesar becomes dbftbs with a shift key of 1", () => {
  expect(caesarCipher(string, 1)).toBe("dbftbs");
});

test("caesar becomes geiwev with a shift key of 4", () => {
  expect(caesarCipher(string, 4)).toBe("geiwev");
});

test("works with punctuation", () => {
  expect(caesarCipher("I am not caesar.", 2)).toBe("K co pqv ecguct.");
});
