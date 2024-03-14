const makeArrayConsecutive2 = require("../intro/makeArrayConsecutive2");

test("[6, 2, 3, 8]", () => {
  expect(makeArrayConsecutive2([6, 2, 3, 8])).toBe(3);
});

test("[0, 3]", () => {
  expect(makeArrayConsecutive2([0, 3])).toBe(2);
});

test("[5, 4, 6]", () => {
  expect(makeArrayConsecutive2([5, 4, 6])).toBe(0);
});

test("[6, 3]", () => {
  expect(makeArrayConsecutive2([6, 3])).toBe(2);
});

test("[1]", () => {
  expect(makeArrayConsecutive2([1])).toBe(0);
});
