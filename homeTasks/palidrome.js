//TODO: Check whether string is palindrome, or not.

function checkPolidrome(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i].toLowerCase();
  }

  return reversedStr === str.toLowerCase() ? true : false;
}

//? Testing for words 'ACA', 'classwork'

console.info(checkPolidrome('ACA'));
console.info(checkPolidrome('classwork'));
