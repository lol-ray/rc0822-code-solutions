const fs = require('fs');
const text = process.argv[2];

fs.writeFile('note.txt', text + '\n', err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
