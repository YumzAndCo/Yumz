const { query } = require('express');
const db = require('../models/userModels.js');

const createError = (errorInfo) => {
  const {method, type, error} = errorInfo;
  return {
    log: `userController.${method} ${type}: ERROR: ${typeof error === 'object' ? JSON.stringify(error):error}`,
    message: {err: `error occurreed in userController.${method}. Check server logs for more details.`}
  };
};

const userController = {};

userController.getUser = async (req, res, next) => {
  try {
    //test: console-log params to make sure params are being sent over
    const {email, password} = req.body

    //test: ensure req.params are appropriately saved as consts
    // console.log('email: ', email,  'password : ', password)

    const queryResult = await db.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`);

    res.locals = queryResult.rows[0];
    

    // console.log('res.locals: ', res.locals)
    return next();
  }
  catch (error){
    next({
      log: 'error running getUser middleware. ',
      message: 'an error occurred trying to find user'
    });
  }
};

userController.createUser = async (req, res, next) => {
  try{
    const {name, email, password} = req.body;
    console.log(req.body);
    // TODO: change from truthy to different logic later
    if(!name || !password || !email){
      return next(createError({
        method: 'createUser',
        type: 'all fields must be filled',
        error: 'all fields must be filled'
      }));
    }

    const checkEmail = await db.query(`SELECT * FROM users WHERE email = '${email}'`);
    if (checkEmail.rowCount !== 0){
      return next({
        log: 'email already exists',
        message: {err: 'email already exists'}
      });
    }

    // CHECKS TO SEE IF NAME IS UNIQUE
    // const checkName = await db.query(`SELECT * FROM users WHERE name = '${name}'`);
    // if (checkName.rowCount !== 0){
    //   return next({
    //     log: 'name already exists',
    //     message: {err: 'email already exists'}
    //   });
    // }
    
    //creating the user instance in the database
    const created = await db.query(
      `INSERT INTO users (email, name, password) 
      VALUES ('${email}', '${name}', '${password}')`
    )
    
    //getting that instance from the database and saving it to res.locals
    const queryResult = await db.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`);
    res.locals.user = queryResult.rows[0]
    
    
    const userID = res.locals.user.user_id;
    

    //creating three new instances of Collections based on that user's userID
    await db.query(
      `INSERT INTO collection (user_id, name)
      VALUES ('${userID}', 'favorites')`
    )

    await db.query(
      `INSERT INTO collection (user_id, name)
      VALUES ('${userID}', 'wishlist')`
    )

    await db.query(
      `INSERT INTO collection (user_id, name)
      VALUES ('${userID}', 'reviews')`
    )

    const userFavorites = await db.query(`SELECT * FROM users WHERE user_id = '${userID}' AND name = 'favorites'`);
    const userWishlist = await db.query(`SELECT * FROM users WHERE user_id = '${userID}' AND name = 'wishlist'`);
    const userReviews = await db.query(`SELECT * FROM users WHERE user_id = '${userID}' AND name = 'reviews'`);

    const collections = {
      userFavorites: userFavorites,
      userWishList: userWishlist,
      userReviews: userReviews
    }

    res.locals.collections = collections;
    
    return next();

  } catch(error){
    return next({
      log: 'userController.createUser()',
      message: {err: error}
    });
  }
};


module.exports = userController;