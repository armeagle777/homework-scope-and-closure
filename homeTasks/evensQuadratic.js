//TODO: Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

function evensQuadratic(numArray) {
  let sum = 0;
  for (let num of numArray) {
    if (num % 2 === 0) {
      sum += num ** 2;
    }
  }
  return sum;
}

//? Testing the function with arrays [1, 2, 4, 6], [12, 3, 8, 11]
console.info(evensQuadratic([1, 2, 4, 6]));
console.info(evensQuadratic([12, 3, 8, 11]));
