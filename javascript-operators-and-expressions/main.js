var width = 13;
var height = 4;
var area = width * height;

var bill = 900;
var payment = 1200;
var change = payment - bill;

var quizzes = 80;
var midterm = 77;
var final = 92;
var grade = (quizzes + midterm + final) / 3;

var pH = 6;
var isAcidic = pH < 7;

var headCount = 299;
var isSparta = headCount === 300;

var motto = 'Ray Le';
motto += ' is the GOAT';

console.log('value of area: ' + area);
console.log('typeof of area: ' + typeof area);
console.log('value of change: ' + change);
console.log('typeof of change: ' + typeof change);
console.log('value of grade: ' + grade);
console.log('typeof of grade: ' + typeof grade);
console.log('value of isAcidic: ' + isAcidic);
console.log('typeof of isAcidic: ' + typeof isAcidic);
console.log('value of isSparta: ' + isSparta);
console.log('typeof of isSparta: ' + typeof isSparta);
console.log('value of motto: ' + motto);
console.log('typeof of motto: ' + typeof motto);
