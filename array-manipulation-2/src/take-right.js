/* exported takeRight */

// create new variable for array result
// if array length is greater than count
// for loop starting from count subtracted from array length
// push to new array
// else return array
// return new array

function takeRight(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (let i = array.length - count; i < array.length; ++i) {
      newArray.push(array[i]);
    }
  } else {
    return array;
  }
  return newArray;
}
