/* exported truncate */

// return substring of string at length and append ellipses

function truncate(length, string) {
  return string.substring(0, length) + '...';
}
