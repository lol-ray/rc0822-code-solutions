/* exported getKeys */

// create new array
// create for in loop for the object
// push each key to new array
// return the new array

function getKeys(object) {
  var newArray = [];
  for (const x in object) {
    newArray.push(x);
  }
  return newArray;
}
