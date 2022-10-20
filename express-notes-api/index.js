const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const x in data.notes) {
    notesArray.push(data.notes[x]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isInteger(data.notes[id]) && id > 0) {
    res.json(data.notes[id]);
  } else if (!data.notes[id]) {
    res.status(404).json({
      error: 'note does not exist'
    });
  } else {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body) {
    res.status(400).json({
      error: 'content is a required field'
    });
  }
  const newNote = {
    id: data.nextId,
    content: req.body
  };
  data.notes[newNote.id] = newNote;
  data.nextId++;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    } else {
      res.status(201).json(newNote);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  }
  if (typeof data.notes[id] === 'undefined') {
    res.status(404).json({
      error: 'note does not exist'
    });
  }
  delete data.notes[id];
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  }
  if (typeof req.body === 'undefined') {
    res.status(400).json({
      error: 'content is a required field'
    });
  }
  if (typeof data.notes[id] === 'undefined') {
    res.status(404).json({
      error: 'note does not exist'
    });
  }
  const newNote = {
    id,
    content: req.body
  };
  data.notes[id] = newNote;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    } else {
      res.status(200).json(newNote);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
