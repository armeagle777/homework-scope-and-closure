//TODO: Create a function printAfter that calls its argument after printing hello world

const print = () => console.log('Ellon Mask');

function printAfter(action) {
  console.info('Hello World');
  action();
}

//? Testing for a given print function

printAfter(print);
