const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(x => x === 0 || x % 2 === 0);
const overFive = numbers.filter(x => x > 5);
const startWithE = names.filter(x => x.charAt(0) === 'E');
const haveD = names.filter(x => x.includes('D') || x.includes('d'));
