//TODO: Write a function that implements filtering in array

const values = [null, true, {}, { name: 'Elon' }, '', NaN, 0];

function filterFalsyValues(arr) {
  const filteredArray = [];
  for (let el of arr) {
    if (Boolean(el)) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
}

//? Testing for two arrays
console.info(filterFalsyValues(['hello', 1233, []]));
console.info(filterFalsyValues(values));
