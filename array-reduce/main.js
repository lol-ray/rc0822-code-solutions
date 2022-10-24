const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((prev, curr) => prev + curr, 0);
const prod = numbers.reduce((prev, curr) => prev * curr);
const balance = account.reduce((prev, curr) => {
  if (curr.type === 'deposit') {
    return prev + curr.amount;
  } else if (curr.type === 'withdrawal') {
    return prev - curr.amount;
  }
}, 0);
const composite = traits.reduce((prev, curr) => Object.assign(prev, curr));
