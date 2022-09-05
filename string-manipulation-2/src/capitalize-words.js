/* exported capitalizeWords */

// create new variable to split string into array
// create new variable for result string
// for loop to go through split array
// capitalize first letter and lowercase rest of word for each word in the array
// for loop to go through split array
// add word and space to string
// remove extra space at end of result string
// return result string

function capitalizeWords(string) {
  var split = string.split(' ');
  var newString = '';
  for (let i = 0; i < split.length; ++i) {
    split[i] = split[i][0].toUpperCase() + split[i].substring(1).toLowerCase();
  }
  for (let i = 0; i < split.length; ++i) {
    newString += split[i] + ' ';
  }
  newString = newString.substring(0, newString.length - 1);
  return newString;
}
