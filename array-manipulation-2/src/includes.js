/* exported includes */

// for loop to go through each element in array
// check if element matches value
// return true
// else return false

function includes(array, value) {
  for (const x in array) {
    if (array[x] === value) {
      return true;
    }
  }
  return false;
}
