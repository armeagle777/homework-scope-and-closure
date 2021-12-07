//TODO: Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
  return function () {
    return str;
  };
}

//? Testing for strings 'apple', 'pear', ''

const f1 = redundant('apple');
console.info(`f1: ${f1()}`);

const f2 = redundant('pear');
console.info(`f2: ${f2()}`);

const f3 = redundant('');
console.info(`f3: ${f3()}`);
