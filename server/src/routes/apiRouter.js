const express = require('express');
const path = require('path');
require('dotenv').config();

const googlePlacesAPIController = require('../controllers/googlePlacesAPIController');

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const router = express.Router();

router.get('/test', googlePlacesAPIController.findPlace, (req, res) => {
  return res.status(200).json(res.locals.textResponse);
});

module.exports = router;