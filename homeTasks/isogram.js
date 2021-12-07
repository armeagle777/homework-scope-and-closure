//TODO: Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
//TODO:  word or phrase without a repeating letter.

function isogramWords(word) {
  for (let i = 1; i < word.length; i++) {
    for (let j = 0; j < i; j++) {
      if (word[j].toUpperCase() === word[i].toUpperCase()) {
        return false;
      }
    }
  }

  return true;
}

//? Testing words 'Hello',  'Javascript', 'Computer'
console.info(isogramWords('Hello'));
console.info(isogramWords('HelLo'));
console.info(isogramWords('JavAscript'));
console.info(isogramWords('Computer'));
