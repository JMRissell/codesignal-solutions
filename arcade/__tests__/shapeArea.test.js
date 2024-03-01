const shapeArea = require("../intro/shapeArea");

test("area if n = 2", () => {
  expect(shapeArea(2)).toBe(5);
});

test("area if n = 3", () => {
  expect(shapeArea(3)).toBe(13);
});

test("area if n = 1", () => {
  expect(shapeArea(1)).toBe(1);
});

test("area if n = 5", () => {
  expect(shapeArea(5)).toBe(41);
});

test("area if n = 7000", () => {
  expect(shapeArea(7000)).toBe(97986001);
});

test("area if n = 8000", () => {
  expect(shapeArea(8000)).toBe(127984001);
});

test("area if n = 9999", () => {
  expect(shapeArea(9999)).toBe(199940005);
});

test("area if n = 9998", () => {
  expect(shapeArea(9998)).toBe(199900013);
});

test("area if n = 8999", () => {
  expect(shapeArea(8999)).toBe(161946005);
});

test("area if n = 100", () => {
  expect(shapeArea(100)).toBe(19801);
});
