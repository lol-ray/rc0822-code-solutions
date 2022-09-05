/* exported numVowels */

// create new variable
// for loop for each letter of string
// check if letter is vowel
// add to count
// return count

function numVowels(string) {
  var count = 0;
  for (let i = 0; i < string.length; ++i) {
    if (string[i].toLowerCase() === 'a' ||
      string[i].toLowerCase() === 'e' ||
      string[i].toLowerCase() === 'i' ||
      string[i].toLowerCase() === 'o' ||
      string[i].toLowerCase() === 'u') {
      count++;
    }
  }
  return count;
}
