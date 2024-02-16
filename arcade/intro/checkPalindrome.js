function solution(inputString) {
  const reversedInput = inputString.split("").reverse().join("");

  return inputString === reversedInput;
}

module.exports = solution;
