import React, { Component, useState } from 'react';
import '../stylesheets/listview.css';
import ListItem from './ListItem.jsx';


const CollectionList = (props) => {
  // const [restaurants, setRestaurants] = useState(props.restaurants); //array
  // const [listName, setListName] = useState(props.listName);

  let restaurants;
  if (props.listName === 'Reviews') {
    restaurants = [{
      name: 'Ramen House',
      rating: 8,
      cuisine: 'Japanese',
      hours: '11 am - 8 pm, 7 days/wk',
      preview: 'Lorem ipsum...',
      id: 1
    },
    {
      name: 'Ramen place',
      rating: 8,
      cuisine: 'Japanese',
      hours: '11 am - 8 pm, 7 days/wk',
      preview: 'Lorem ipsum...',
      id: 2
    }];
  }

  return (
    <div className="listview" >
      <div className="collectionTitle">{props.listName}</div>
      {restaurants.map((listing) => ( //each restautant in array, return a listitem
        <ListItem listing={listing} key={listing.id} />
      ))}

    </div>

  );
};

export default CollectionList;