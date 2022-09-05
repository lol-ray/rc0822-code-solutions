/* exported compact */

// create a new array
// create a for loop to visit each element in the array
// if element is equal to false, null, NaN, 0, -0, undefined, '', do nothing
// else push element to new array
// return new array

function compact(array) {
  var newArray = [];
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === false || array[i] === null || Number.isNaN(array[i]) ||
      array[i] === 0 || array[i] === undefined || array[i] === '') {
      // empty
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
