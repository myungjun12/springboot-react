const express = require('express');
const app = express();
const port = 8888;

app.get('/api/hello', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`서버시작 http://localhost:${port}`);
});
