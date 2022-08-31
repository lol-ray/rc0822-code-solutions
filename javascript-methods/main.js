var x = 5;
var y = 6;
var z = 9;
var maximumValue = Math.max(x, y, z);

console.log('value of maximumValue: ' + maximumValue);

var heroes = ['Batman', 'Spiderman', 'Superman', 'Iron Man'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex: ' + randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero: ' + randomHero);

var library = [
  {
    title: 'How Not to Die',
    author: 'Gene Stone and Michael Greger'
  },
  {
    title: 'The Gift of Fear',
    author: 'Gavin de Becker'
  },
  {
    title: 'The Wim Hof Method',
    author: 'Wim Hof'
  }
];
var lastBook = library.pop();
var firstBook = library.shift();

console.log('value of lastBook: ' + lastBook);
console.log('value of firstBook: ' + firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library: ' + library);

var fullName = 'Ray Le';
var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName: ' + firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName: ' + sayMyName);
