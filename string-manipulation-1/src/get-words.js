/* exported getWords */
function getWords(string) {
  var newArray = [];
  if (string.length === 0) {
    return newArray;
  } else {
    return string.split(' ');
  }
}
