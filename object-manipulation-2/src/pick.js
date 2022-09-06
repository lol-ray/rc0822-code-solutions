/* exported pick */

// create new object
// for loop to go through all keys in source object
// if key is included in keys array and value is not undefined
// add key value pair to result object
// return result object

function pick(source, keys) {
  var result = {};
  for (const key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}
