/* exported reverse */

// create a new array
// create a for loop to visit each element in the array backwards
// push the array element to the new array
// return new array

function reverse(array) {
  var newArray = [];
  for (let i = array.length - 1; i >= 0; --i) {
    newArray.push(array[i]);
  }
  return newArray;
}
