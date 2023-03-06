import React, { useState } from 'react';
import RestaurantInfo from './RestaurantInfo.jsx';
import RestaurantSearchResult from './RestaurantSearchResult.jsx';
import styles from '../stylesheets/new-restaurant.css';

const NewRestaurant = props => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const submitRestaurantName = (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#restaurant-name-input');
    const restaurantName = nameInput.value;
    if (!restaurantName.length) {
      // This could be handled better... but no time :(
      alert('Please enter a restaurant name');
      return;
    }
    console.log('submitRestaurantName, new restaurant:', restaurantName);

    // TODO 
    // GET request to /api/restaurant/{restaurantName}
    // also be able to handle scenario with zero search results returned
    setSearchResults(
      {
        'googlePlaceId1':
        {
          'name': 'The Krusty Krab',
          'address': '124 Conch St, Bikini Bottom, Pacific Ocean 12345'
        },
        'googlePlaceId2':
        {
          'name': 'The Byrde House',
          'address': '6818 Gaines Ferry Road, Flowery Branch, GA 30542'
        },
        'googlePlaceId3':
        {
          'name': 'Sherlock Holmes Consulting',
          'address': '221B Baker St., London, U.K'
        }
      }
    );
  };

  const onSearchResultClick = async (event, selectedRestaurant) => {
    console.log(selectedRestaurant);
    // TO DO - GET request to api to get more info on the restaurant
    /*
    try {
      const response = await fetch(`/api/place-details/${selectedRestaurant.googlePlaceId}`);
      const restaurantDetails = await response.json();
      setRestaurantInfo(restaurantDetails);
    } catch (error) {
      // This should be better error handling..
      console.log('NewRestaurant onSearchResultClick error', error.message);
    }*/

    selectedRestaurant.category = '';
    selectedRestaurant.hours = '';
    selectedRestaurant.parking = 'Private lot parking';
    selectedRestaurant.delivery = true;
    selectedRestaurant['dress-code'] = 'Casual';
    selectedRestaurant['credit-cards'] = true;
    selectedRestaurant['menu'] = 'https://www.google.com';
    selectedRestaurant['reservations'] = true;

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
        <button>Prev</button>
        <button id='next-button'>Next</button>
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

      </div>
    );
  }
};

export default NewRestaurant;