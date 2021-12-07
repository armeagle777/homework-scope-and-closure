//TODO: Write a function that returns an anonymous function, which transforms its input by adding a
//TODO:   particular suffix at the end.

function add_suffix(suffix) {
  return function (word) {
    return word + suffix;
  };
}

const add_ly = add_suffix('ly');
const add_less = add_suffix('less');

//? Testing fucntion for words -> hopeless, total, fear, rut

console.info(`hopeless -> ly: ${add_ly('hopeless')}`);
console.info(`total -> ly: ${add_ly('total')}`);
console.info(`fear -> less: ${add_less('fear')}`);
console.info(`ruth -> less: ${add_less('ruth')}`);
