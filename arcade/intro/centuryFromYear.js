function solution(year) {
  let result;
  y = Math.trunc(year / 100);
  year % 100 == 0 ? (result = y) : (result = y + 1);

  return result;
}

module.exports = solution;
