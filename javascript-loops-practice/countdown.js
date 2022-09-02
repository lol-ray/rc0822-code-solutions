/* exported countdown */
function countdown(number) {
  var numbersArray = [];
  for (let i = number; i >= 0; --i) {
    numbersArray.push(i);
  }
  return numbersArray;
}
