const isPalindrome = require("../intro/checkPalindrome");

test("If 'aabaa' is a palindrome.", () => {
  expect(isPalindrome("aabaa")).toBe(true);
});

test("If 'abac' is a palindrome.", () => {
  expect(isPalindrome("abac")).toBe(false);
});

test("If 'a' is a palindrome.", () => {
  expect(isPalindrome("a")).toBe(true);
});

test("If 'az' is a palindrome.", () => {
  expect(isPalindrome("az")).toBe(false);
});

test("If 'abacaba' is a palindrome.", () => {
  expect(isPalindrome("abacaba")).toBe(true);
});

test("If 'z' is a palindrome.", () => {
  expect(isPalindrome("z")).toBe(true);
});

test("If 'aaabaaaa' is a palindrome.", () => {
  expect(isPalindrome("aaabaaaa")).toBe(false);
});

test("If 'zzzazzazz' is a palindrome.", () => {
  expect(isPalindrome("zzzazzazz")).toBe(false);
});

test("If 'hlbeeykoqqqqokyeeblh' is a palindrome.", () => {
  expect(isPalindrome("hlbeeykoqqqqokyeeblh")).toBe(true);
});

test("If 'hlbeeykoqqqokyeeblh' is a palindrome.", () => {
  expect(isPalindrome("hlbeeykoqqqokyeeblh")).toBe(true);
});
