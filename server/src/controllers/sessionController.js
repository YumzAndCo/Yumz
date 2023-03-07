const Jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = token => {
  Jwt.verify(token, process.env.JWT_SECRET_KEY);
};

const createError = (errorInfo) => {
  const {method, type, error} = errorInfo;
  return {
    log: `sessionController.${method} ${type}: ERROR: ${typeof error === 'object' ? JSON.stringify(error):error}`,
    message: {err: `error occurreed in sessionController.${method}. Check server logs for more details.`}
  };
};

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
  try {
    const isValidJWT = verifyJWT(req.cookies.JWT);
    if (!isValidJWT) res.locals.status = 300;
    return next();
  } catch (error) {
    return next(createError({
      method: 'isLoggedIn',
      type: ' ',
      error
    }));
  }
};

sessionController.startSession = async (req, res, next) => {
  try {
    const isValidJWT = verifyJWT(res.locals.JWT);
    if (!isValidJWT) res.locals.status = 300;
    return next();
  } catch (error) {
    return next(createError({
      method: 'startSession',
      type: ' ',
      error
    }));
  }
};

module.exports = sessionController;