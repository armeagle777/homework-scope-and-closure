//TODO: Write a function which remove elements with length <= 3

//TODO: Write a function which removes elements with length <= 3

function filterByLength(arr) {
  const filteredArray = [];
  for (let el of arr) {
    if (el.length > 3) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
}

//? Testing for array ["kia", "tesla", "bmw", "mercedes"]
console.info(filterByLength(['kia', 'tesla', 'bmw', 'mercedes']));
