/* exported tail */

// create a new array
// create a for loop to visit each element in the array except for the first
// push the array element to the new array
// return new array

function tail(array) {
  var newArray = [];
  for (let i = 1; i < array.length; ++i) {
    newArray.push(array[i]);
  }
  return newArray;
}
