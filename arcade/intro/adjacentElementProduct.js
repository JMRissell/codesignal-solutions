function solution(inputArray) {
  if (inputArray.length == 2) {
    return inputArray[0] * inputArray[1];
  } else {
    let productsArray = [];
    inputArray.forEach((ele, index) => {
      if (index < inputArray.length - 1)
        productsArray.push(ele * inputArray[index + 1]);
    });
    return Math.max(...productsArray);
  }
}

module.exports = solution;
