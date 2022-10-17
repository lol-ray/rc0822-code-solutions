const express = require('express');
const app = express();

app.use(function (req, res) {
  console.log('method:', req.method());
  String(res.send());
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
