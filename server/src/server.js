const express = require('express');
const path = require('path');
const userController = require('./controllers/userController');

const app = express();
const apiRouter = require('./routes/apiRouter');
const PORT = 3000;

app.use(express.json());

app.use('/api', apiRouter);

app.post('/signup', userController.createUser, (req, res) => {
  // TODO: Finish this route and it's middleware
  console.log('Sign up Details: ', req.body);
  res.status(400).json(req.body);
});

app.get('/login', userController.getUser, (req, res) => {
  // TODO: Finish this route and it's middleware
  console.log('Login Deatils: ', req.params);
  res.status(400).json(req.body);
});

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../../client/src/index.html'));
});

app.use((error, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occured'}
  };
  const errorObj = Object.assign({}, defaultErr, error);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;