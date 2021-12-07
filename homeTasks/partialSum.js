//TODO: Create a function that implements partial sum

function sum(numOne) {
  return function (numTwo) {
    return numOne + numTwo;
  };
}

console.info(sum(1)(2));
const addOne = sum(1);

//? Testing addOne with param -> 2
console.info(addOne(2));

//? Creating addTen const
const addTen = sum(10);

//? Testing addTen and addOne  with params -> 2, 4, 10\

console.info(addTen(2));
console.info(addOne(4));
console.info(addTen(10));
