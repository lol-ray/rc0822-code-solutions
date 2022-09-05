/* exported capitalizeWord */

// check if word is javascript
// return JavaScript
// else return substring of first letter capitalized concatenated with substring of rest of word lower case

function capitalizeWord(word) {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }
}
