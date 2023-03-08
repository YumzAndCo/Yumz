const { query } = require('express');
const db = require('../models/userModels.js');
const bcrypt = require('bcrypt');

const createError = (errorInfo) => {
  const { method, type, error } = errorInfo;
  return {
    log: `userController.${method} ${type}: ERROR: ${
      typeof error === 'object' ? JSON.stringify(error) : error
    }`,
    message: {
      err: `error occurreed in userController.${method}. Check server logs for more details.`,
    },
  };
};

const comparePassword = async (password, hashed) => {
  return await bcrypt.compare(password, hashed);
};

const userController = {};

userController.verifyUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let hashedPassword = await db.query(
      `SELECT email, password FROM users WHERE email = '${email}'`
    );
    hashedPassword = hashedPassword.rows[0].password;

    const isValidPW = await comparePassword(password, hashedPassword);

    if (!isValidPW) {
      return res.status(401).json({ message: 'Wrong password' });
    }
    return next();
  } catch (error) {
    return next({
      log: 'error running userController.verifyUser middleware. ',
      status: 400,
      message: { err: error },
    });
  }
};

userController.createUser = async (req, res, next) => {
  try {
    console.log('in createUser');
    const { name, email } = req.body;
    let { password } = req.body;

    const checkEmail = await db.query(
      `SELECT email FROM users WHERE email = '${email}'`
    );
    console.log(`Checking if email:${email} exists in DB.`);
    if (checkEmail.rowCount !== 0) {
      return next({
        log: 'email already exists',
        status: 400,
        message: { err: 'email already exists' },
      });
    }

    password = await bcrypt.hash(password, 5);

    await db.query(
      `INSERT INTO users (email, name, password)
      VALUES ('${email}', '${name}', '${password}')`
    );
    //getting that instance from the database and saving it to res.locals
    const queryResult = await db.query(
      `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
    );
    res.locals.user = queryResult.rows[0];

    const userID = res.locals.user.user_id;

    return next();
  } catch (error) {
    return next({
      log: 'error running userController.createUser middleware',
      status: 400,
      message: { err: error },
    });
  }
};

module.exports = userController;
