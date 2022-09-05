/* exported ransomCase */

// create new variable
// for loop to go through each letter of string
// if even position, add lower case letter
// else if odd position, add upper case letter
// return new variable

function ransomCase(string) {
  var newString = '';
  for (let i = 0; i < string.length; ++i) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
