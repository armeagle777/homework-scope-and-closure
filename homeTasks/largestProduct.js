//TODO: Given an array of integers, find the pair of adjacent elements that has the largest product and return
//TODO:  that product.

function largestProduct(numArr) {
  let product = 0;
  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i] * numArr[i + 1] > product) {
      product = numArr[i] * numArr[i + 1];
    }
  }

  return product;
}

//? Testing for arrays [15, 2, 3, 4], [1,3, 7]
console.info(largestProduct([15, 2, 3, 4]));
console.info(largestProduct([1, 3, 7]));
