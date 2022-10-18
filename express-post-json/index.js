const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
const jsonExpress = express.json();

app.use(jsonExpress);

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const gradeEntry = req.body;
  const id = nextId++;
  gradeEntry.id = id;
  grades[id] = gradeEntry;
  res.status(201).json(gradeEntry);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
