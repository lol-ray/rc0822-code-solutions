/* exported swapChars */

// create new variable splitting string into characters
// create new variable for result string
// create temp variable for first index
// assign second index to first index
// assign temp variable to second index
// for loop to go through split array
// join split array into result string
// return result string

function swapChars(firstIndex, secondIndex, string) {
  var split = string.split('');
  var newString = '';
  var temp = split[firstIndex];
  split[firstIndex] = split[secondIndex];
  split[secondIndex] = temp;
  for (const x in split) {
    newString += split[x];
  }
  return newString;
}
