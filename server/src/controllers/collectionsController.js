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

collectionsController.getRatings = async (req, res, next) => {
  try {
    const { userID, restaurantID } = req.body;
    const userRatings = await db.query(
      `SELECT r.* FROM rating r
      JOIN users u ON r.user_id = u.user_id
      JOIN restaurant rest ON r._id = rest.i_d
      WHERE r.user_id = '${userID}'
      AND r._id = '${restaurantID}'
      AND rest.is_reviewed = true`
    );
    res.locals.userRatings = userRatings.rows;
    return next();
  } catch (error) {
    return next({
      log: 'collectionsController.getRatings() ERROR',
      status: 400,
      message: { err: `in collectionsController.getRatings: ${error}` },
    });
  }
};

collectionsController.getFavorites = async (req, res, next) => {
  try {
    const { userID } = req.body;
    const userFavorites = await db.query(
      `SELECT r.* FROM restaurant r
      JOIN users u ON r.user_id = u._id
      WHERE r.user_id = '${userID}' AND r.is_favorite = true`
    );
  } catch (error) {
    return next({
      log: 'collectionsController.getFavorites() ERROR',
      status: 400,
      message: { err: `in collectionsController.getFavorites: ${error}` },
    });
  }
};

collectionsController.getWishlist = async (req, res, next) => {
  try {
    const { userID } = req.body;
    const userWishlist = await db.query(
      `SELECT *
      FROM users u
      JOIN restaurant r ON u._id = r.user_id
      WHERE u._id = '${userID}' AND r.is_wishlist = true;`
    );
  } catch (error) {
    return next({
      log: 'collectionsController.getWishlist() ERROR',
      status: 400,
      message: { err: `in collectionsController.getWishlist: ${error}` },
    });
  }
};

collectionsController.addToFavorites = async (req, res, next) => {
  const collectionID = req.body.collection_id;
  const restaurantID = res.locals.restID;
  await db.query(
    `INSERT INTO collection_restaurant (collection_id, restaurant_id)
    VALUES ('${collectionID}', '${restaurantID}')`
  );
  return next();
};

collectionsController.addToWishlist = async (req, res, next) => {
  const collectionID = req.body.collection_id;
  const restaurantID = res.locals.restID;
  await db.query(
    `INSERT INTO collection_restaurant (collection_id, restaurant_id)
    VALUES ('${collectionID}', '${restaurantID}')`
  );
  return next();
};

// Complete addToReviews
collectionsController.addToReviews = async (req, res, next) => {
  try {
    const {
      restaurantID,
      userID,
      dateUpdated,
      overallScore,
      serviceScore,
      foodScore,
      atmosphereScore,
      priceScore,
      notes,
    } = req.body;

    await db.query(
      `INSERT INTO rating (_id, user_id, date_updated, overall_score, service_score, food_score, atmosphere_score, price_score, notes)
      VALUES ('${restaurantID}', '${userID}', '${dateUpdated}', '${overallScore}', '${serviceScore}', '${foodScore}', '${atmosphereScore}', '${priceScore}', '${notes}')`
    );
    return next();
  } catch (error) {
    return next({
      log: 'collectionsController.addToReviews() ERROR',
      status: 400,
      message: { err: `in collectionsController.addToReviews: ${error}` },
    });
  }
};

module.exports = collectionsController;

/*

const body = {
      "user_id": 1,
      "collection_id": 99,
      "restaurant": {
        "restaurant_id": 1234,
        "name": "some restaurant name",
        "address": "123 Something St"
        ....
      },
      "rating": {
        "rating_id": 5678,
        "overall_score": 8,
        "food_score": 3,
        ...
      }
    };

*/
