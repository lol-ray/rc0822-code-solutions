/* exported defaults */

// for loop to go through keys in source object
// if key does not already exist in target or equal null
// add source key pair to target

function defaults(target, source) {
  for (const key in source) {
    if (!(key in target) && target[key] !== null) {
      target[key] = source[key];
    }
  }
}
