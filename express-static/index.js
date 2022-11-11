const express = require('express');
const path = require('path');
const app = express();

const dir = path.join(__dirname, 'public');
const mware = express.static(dir);

app.use(mware);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
