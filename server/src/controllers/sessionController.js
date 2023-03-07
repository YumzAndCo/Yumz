const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = (req, res, next) => {
  // write code here
  console.log('sessionController.isLoggedIn res.cookies = ', res.cookies)
  next()
};

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = (req, res, next) => {
  //write code here
  res.locals.SSID = res.locals.user[0]._id.toString();
  Session.create({cookieId: res.locals.SSID}, (err, data) => {
    // console.log('Session created', data)
    return next();
  });
  
  
};

module.exports = sessionController;