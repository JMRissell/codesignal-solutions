const centuryFromYear = require("../intro/centuryFromYear");

test("Year 1905 => 20th Century", () => {
  expect(centuryFromYear(1905)).toBe(20);
});

test("Year 1700 => 17th Century", () => {
  expect(centuryFromYear(1700)).toBe(17);
});

test("Year 1988 => 20th Century", () => {
  expect(centuryFromYear(1988)).toBe(20);
});

test("Year 2000 => 20th Century", () => {
  expect(centuryFromYear(2000)).toBe(20);
});

test("Year 2001 => 21st Century", () => {
  expect(centuryFromYear(2001)).toBe(21);
});

test("Year 200 => 2nd Century", () => {
  expect(centuryFromYear(200)).toBe(2);
});

test("Year 374 => 4th Century", () => {
  expect(centuryFromYear(374)).toBe(4);
});

test("Year 45 => 1st Century", () => {
  expect(centuryFromYear(45)).toBe(1);
});

test("Year 8 => 1st Century", () => {
  expect(centuryFromYear(8)).toBe(1);
});
