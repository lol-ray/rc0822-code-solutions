/* exported initial */

// create a new array
// create a for loop to visit each element in the array except for the last
// push the array element to the new array
// return new array

function initial(array) {
  var newArray = [];
  for (let i = 0; i < array.length - 1; ++i) {
    newArray.push(array[i]);
  }
  return newArray;
}
