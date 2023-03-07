const { query } = require('express');
const db = require('../models/userModels.js');

// const createError = (errorInfo) => {
//   const {method, type, error} = errorInfo;
//   return {
//     log: `userController.${method} ${type}: ERROR: ${typeof error === 'object' ? JSON.stringify(error):error}`,
//     message: {err: `error occurreed in userController.${method}. Check server logs for more details.`}
//   };
// };

const collectionsController = {};

collectionsController.getReviews = async (req, res, next) => {
  try {
    const {userID} = req.body;
    const userReviews = await db.query(`SELECT * FROM users WHERE user_id = '${userID}' AND name = 'reviews'`);
  } catch(error) {
    return next({
      log: 'an error occurred',
      message: 'an error occurred'
    });
  }
};

collectionsController.getFavorites = async (req, res, next) => {
  try {
    const {userID} = req.body;
    const userFavorites = await db.query(`SELECT * FROM users WHERE user_id = '${userID}' AND name = 'favorites'`);
  } catch(error) {
    return next({
      log: 'an error occurred',
      message: 'an error occurred'
    });
  }
};

collectionsController.getWishlist = async (req, res, next) => {
  try {
    const {userID} = req.body;
    const userWishlist = await db.query(`SELECT * FROM users WHERE user_id = '${userID}' AND name = 'wishlist'`);

  } catch(error) {
    return next({
      log: 'an error occurred',
      message: 'an error occurred'
    });
  }
};

collectionsController.addToFavorites = async (req, res, next) => {

};

collectionsController.addToWishlist = async (req, res, next) => {
  
};

collectionsController.addToReviews = async (req, res, next) => {
  
};