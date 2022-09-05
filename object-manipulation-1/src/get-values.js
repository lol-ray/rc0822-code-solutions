/* exported getValues */

// create new array
// create for in loop for object
// push object value to new array
// return new array

function getValues(object) {
  var newArray = [];
  for (const x in object) {
    newArray.push(object[x]);
  }
  return newArray;
}
