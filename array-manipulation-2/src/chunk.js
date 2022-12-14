/* exported chunk */

// create new array
// for loop that goes through array with size increments
// push sliced array to new array
// return new array

function chunk(array, size) {
  var newArray = [];
  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
