const adjacentElements = require("../intro/adjacentElementProduct");

test("[3, 6, -2, -5, 7, 3]", () => {
  expect(adjacentElements([3, 6, -2, -5, 7, 3])).toBe(21);
});

test("[-1, -2]", () => {
  expect(adjacentElements([-1, -2])).toBe(2);
});

test("[5, 1, 2, 3, 1, 4]", () => {
  expect(adjacentElements([5, 1, 2, 3, 1, 4])).toBe(6);
});

test("[1, 2, 3, 0]", () => {
  expect(adjacentElements([1, 2, 3, 0])).toBe(6);
});

test("[9, 5, 10, 2, 24, -1, -48]", () => {
  expect(adjacentElements([9, 5, 10, 2, 24, -1, -48])).toBe(50);
});

test("[5, 6, -4, 2, 3, 2, -23]", () => {
  expect(adjacentElements([5, 6, -4, 2, 3, 2, -23])).toBe(30);
});

test("[4, 1, 2, 3, 1, 5]", () => {
  expect(adjacentElements([4, 1, 2, 3, 1, 5])).toBe(6);
});

test("[-23, 4, -3, 8, -12]", () => {
  expect(adjacentElements([-23, 4, -3, 8, -12])).toBe(-12);
});

test("[1, 0, 1, 0, 1000]", () => {
  expect(adjacentElements([1, 0, 1, 0, 1000])).toBe(0);
});
