const sum = require("./add");

test("1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("0 + 1000 = 1000", () => {
  expect(sum(0, 1000)).toBe(1000);
});

test("2 + -39 = -37", () => {
  expect(sum(2, -39)).toBe(-37);
});

test("99 + 100 = 199", () => {
  expect(sum(99, 100)).toBe(199);
});

test("-100 + 100 = 0", () => {
  expect(sum(-100, 100)).toBe(0);
});

test("-1000 + -1000 = 1000", () => {
  expect(sum(-1000, -1000)).toBe(-2000);
});
