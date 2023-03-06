import React, { useState } from 'react';
import RestaurantInfo from './RestaurantInfo.jsx';
import RestaurantSearchResult from './RestaurantSearchResult.jsx';
import RatingsTable from './RatingsTable.jsx';
import styles from '../stylesheets/new-restaurant.css';
import detailStyles from '../stylesheets/details-modal.css';
import RatingNotes from './RatingNotes.jsx';
import helperFns from '../helperFns.js';

const NewRestaurant = props => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [searchResults, setSearchResults] = useState({});

  const submitRestaurantName = async (event) => {
    try {
      event.preventDefault();
      const nameInput = document.querySelector('#restaurant-name-input');
      const restaurantName = nameInput.value;
      if (!restaurantName.length) {
        // This could be handled better... but no time :(
        alert('Please enter a restaurant name');
        return;
      }

      // TODO - not handling scenario where no search results come back..
      console.log('submitRestaurantName, searching for restaurant name:', restaurantName);
      const userCoords = helperFns.retrieveUserCoords();
      const latitude = Object.hasOwn(userCoords, 'latitude') ? userCoords.latitude : null;
      const longitude = Object.hasOwn(userCoords, 'longitude') ? userCoords.longitude : null;
      let requestUrl = `/api/search?query=${restaurantName}`;
      if (latitude && longitude) {
        requestUrl += `&latitude=${latitude}&longitude=${longitude}`;
      }
      console.log('NewRestaurant sending request to ', requestUrl);
      const response = await fetch(requestUrl);
      const jsonSearchResults = await response.json();

      const newSearchResults = {};
      for (const [googlePlaceId, googlePlaceInfo] of Object.entries(jsonSearchResults.results)) {
        newSearchResults[googlePlaceId] = {
          'name': googlePlaceInfo.name,
          'address': googlePlaceInfo.address
        };
      }

      setSearchResults(newSearchResults);
    } catch (error) {
      // This should be better error handling..
      console.log('NewRestaurant submitRestaurantName error', error.message);
    }
  };

  const onSearchResultClick = async (event, selectedRestaurant) => {
    console.log(selectedRestaurant);
    try {
      const googlePlaceId = selectedRestaurant.googlePlaceId;
      const requestUrl = `/api/place-details?placeID=${googlePlaceId}`;

      const response = await fetch(requestUrl);
      const restaurantDetails = await response.json();

      // Note: Google Places API doesn't provide all of the details, so hardcoding for now
      // Yelp API should provide remaining details
      const newRestaurantInfo = await {};
      newRestaurantInfo['googlePlaceId'] = restaurantDetails.id;
      newRestaurantInfo['name'] = restaurantDetails.name;
      newRestaurantInfo['address'] = restaurantDetails.address;
      newRestaurantInfo['category'] = 'American (Traditional), Pizza, Pasta Shops';
      newRestaurantInfo['parking'] = 'Private lot parking';
      newRestaurantInfo['hours'] = restaurantDetails.hours;
      newRestaurantInfo['menu'] = 'https://www.google.com';
      newRestaurantInfo['dress-code'] = 'Casual';
      newRestaurantInfo['reservations'] = restaurantDetails.reservable;
      newRestaurantInfo['delivery'] = restaurantDetails.takeout;
      newRestaurantInfo['credit-cards'] = true;

      setSearchResults({});
      setRestaurantInfo(newRestaurantInfo);
    } catch (error) {
      // This should be better error handling..
      console.log('NewRestaurant onSearchResultClick error', error.message);
    }
  };

  const onFinishBtnClick = () => {
    console.log('Finish button clicked');
    // TO DO - post request to /restaurant
  };

  const searchResultItems = [];
  for (const [googlePlaceId, googlePlaceInfo] of Object.entries(searchResults)) {
    searchResultItems.push(
      <RestaurantSearchResult
        name={googlePlaceInfo.name}
        address={googlePlaceInfo.address}
        googlePlaceId={googlePlaceId}
        onSearchResultClick={onSearchResultClick}
        key={googlePlaceId}
      />
    );
  }

  if (searchResultItems.length > 0) {
    return (
      <div id='new-restaurant-info'>
        <div id='new-restaurant-header'>Search Results</div>
        {searchResultItems}
        {/* Skipping next button functionality for now..
        <button id='next-button'>Next</button> */}
      </div>
    );
  } else if (restaurantInfo === null) {
    return (
      <div id='new-restaurant-info'>
        <div id='new-restaurant-header'>Add a Restaurant</div>
        <div id='new-restaurant-prompt'>What is the name of the restaurant?</div>
        <form
          onSubmit={(event) => submitRestaurantName(event)}
          autoComplete='off'>
          <input
            id='restaurant-name-input'
            name='restaurant-name-input'
            type='text' /><br />
          <input type='submit'
            value='Next'
            className='submit-button'></input>
        </form>
      </div>
    );
  } else {
    return (
      <div id='new-restaurant-info'>
        <div id="restaurant-name">{restaurantInfo.name}</div>
        <RestaurantInfo info={restaurantInfo} />
        <div className="section-header">
          <span>Ratings</span>
        </div>
        <RatingsTable />
        <div className="section-header">
          <span>Notes</span>
        </div>
        <RatingNotes
          buttonText='Finish'
          clickHandler={onFinishBtnClick} />
      </div>
    );
  }
};

export default NewRestaurant;