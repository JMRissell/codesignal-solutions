function solution(statues) {
  statues.sort((a, b) => {
    return a - b;
  });

  let firstStatue = statues[0];
  let lastStatue = statues[statues.length - 1];
  let diffOfFirstAndLast = lastStatue - firstStatue;
  let statuesNeeded = diffOfFirstAndLast - (statues.length - 1);

  return statuesNeeded;
}

module.exports = solution;
