import capitalize from "../code/capitalize.js";

test("capitalizes word into Word", () => {
  expect(capitalize("word")).toBe("Word");
});
test("capitalizes string into String", () => {
  expect(capitalize("string")).toBe("String");
});
