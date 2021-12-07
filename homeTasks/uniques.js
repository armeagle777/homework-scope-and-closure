//TODO: Given an array. Determine whether it consists only from uniques or not.

function areElementsUnique(arr) {
  for (let el of arr) {
    if (el % 2 === 0) {
      return false;
    }
  }
  return true;
}

//? Testing for two arrays
console.info(areElementsUnique([1, 3, 6, 7])); // false
console.info(areElementsUnique([121, 37, 29, 3])); // true
