function solution(sequence) {
  let violations = 0;
  let result = true;

  for (i = 0; i < sequence.length; i++) {
    if (violations == 2) {
      result = false;
      break;
    }
    if (sequence[i] >= sequence[i + 1]) {
      violations++;
    } else if (sequence[i] >= sequence[i + 2]) {
      sequence.splice(i + 2, 1);
      violations++;
    }
  }
  return result;
}

module.exports = solution;
