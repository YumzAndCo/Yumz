const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../../client/src/index.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/src/signup.html')); 
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;