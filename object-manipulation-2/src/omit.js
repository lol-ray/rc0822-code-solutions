/* exported omit */

// create new object
// for loop to go through source
// if key is not found in keys array
// insert key value pair in new object
// return new object

function omit(source, keys) {
  var newObject = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
