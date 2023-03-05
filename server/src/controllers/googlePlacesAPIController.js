const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const googlePlacesAPIController = {};

googlePlacesAPIController.findPlace = async (req, res, next) => { 
  try {
    const { input, inputtype } = req.query;
    const fields = 'formatted_address name rating opening_hours geometry';
    console.log('In googlePlacesAPIController.findPlace');
    // const response = await fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?' + new URLSearchParams({
    //   input,
    //   inputtype,
    //   key: GOOGLE_PLACES_API_KEY,
    // }));
    // const geocodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJeRpOeF67j4AR9ydy_PIzPuM&key=${GOOGLE_PLACES_API_KEY}`);
    const geocodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=97209&key=${GOOGLE_PLACES_API_KEY}`);
    const placeResponse = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=${inputtype}&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${GOOGLE_PLACES_API_KEY}`);
    const nearbySearchResponse = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?`);
    res.locals.geocode = await geocodeResponse.json();
    res.locals.response = await placeResponse.json();
    console.log('googlePlacesAPIController.findPlace; Geocode:', res.locals.geocode);
    console.log('googlePlacesAPIController.findPlace; Place:', res.locals.response);
    return next();
  } catch (error) {
    return next({
      log: 'googlePlacesAPIController.findPlace',
      message: {err: error}
    });
  }
};

module.exports = googlePlacesAPIController;