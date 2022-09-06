/* exported invert */

// create new object
// for loop for every key in source
// assign key to new object value
// return new object

function invert(source) {
  var newObject = {};
  for (const key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
