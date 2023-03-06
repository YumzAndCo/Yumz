const express = require('express');
const path = require('path');
require('dotenv').config();

const googlePlacesAPIController = require('../controllers/googlePlacesAPIController');

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const router = express.Router();

router.get('/search', googlePlacesAPIController.search, (req, res) => {
  return res.status(200).json(res.locals.restaurantSearchResults);
});

router.get('/next-page', googlePlacesAPIController.getNextPage, (req, res) => {
  return res.status(200).json(res.locals.nextPageResults);
});

router.get('/place-details-test', googlePlacesAPIController.getPlaceDetails, (req, res) => {
  return res.status(200).json(res.locals.placeDetailsResults);
});
module.exports = router;