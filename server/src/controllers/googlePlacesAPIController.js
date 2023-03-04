const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const googlePlacesAPIController = {};

googlePlacesAPIController.findPlace = async (req, res, next) => { 
  try {
    const { input, inputtype } = req.query;
    console.log('In googlePlacesAPIController.findPlace');
    const response = await fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json' + new URLSearchParams({
      input,
      inputtype,
      key: GOOGLE_PLACES_API_KEY,
    }));
    const result = await response.json();

    console.log('googlePlacesAPIController.findPlace: ', result);
  } catch (error) {
    return next({
      log: 'googlePlacesAPIController.findPlace',
      message: {err: error}
    });
  }
};

module.exports = googlePlacesAPIController;