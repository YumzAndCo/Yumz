const { query } = require('express');
const db = require('../models/userModels.js');

const restaurantController = {};

restaurantController.addRestaurant = async (req, res, next) => {
  try{
    const {name, cuisine, price_rating, hours, address, delivery, menu_url} = req.body;
    await db.query(
      `INSERT INTO restaurants (name, cuisine, price_rating, hours, address, delivery, menu_url) 
      VALUES ('${name}', '${cuisine}', '${price_rating}', '${hours}', '${address}', '${delivery}', '${menu_url}')`
    );
  }
  catch(err){
    return next({
      log: 'an error occurred',
      message: 'an error occurred'
    });
  }
};