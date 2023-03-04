const db = require('../models/userModels.js');

const userController = {};

userController.getUser = async (req, res, next) => {
  try {
    //test: console-log params to make sure params are being sent over
    // console.log(req.params)

    const username = req.params.username;
    const password = req.params.password;

    //test: ensure req.params are appropriately saved as consts
    // console.log('username: ', username,  'password : ', password)

    //test: Try getting all users to make sure we're accessing the database
    // const queryResult = await db.query('SELECT * FROM Users')

    //next: Getting a specific user via username and password
    //  be sure to update username and password strings to reflect input 
    
    const queryResult = await db.query(`SELECT TOP 1 FROM Users WHERE username = ${username} AND password = ${password}`)
    // POTENTIAL DEBUGGING: in above query, ensure database table contains (case-sensitive) username and password rows. (Delete this line after testing)


    res.locals = queryResult.rows[0]

    // test: make sure res.locals has been saved with appropriate data
    // console.log('res.locals: ', res.locals)
    await next()
  }
  catch (error){
    next({
      log: 'error running getUser middleware. ',
      message: 'an error occurred trying to find user'
    })
  }
}

userController.createUser = (req, res, next) => {
  try{
    const userName = req.body
  } catch{

  }
}


module.exports = userController