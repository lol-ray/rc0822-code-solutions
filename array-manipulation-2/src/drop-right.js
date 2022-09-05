/* exported dropRight */

// create variable for result array
// for loop to go through array up until count subtracted from array length
// push to new array
// return new array

function dropRight(array, count) {
  var newArray = [];
  for (let i = 0; i < array.length - count; ++i) {
    newArray.push(array[i]);
  }
  return newArray;
}
