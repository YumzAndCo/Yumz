import React, { Component, useState } from 'react';
import '../stylesheets/listview.css';
import ListItem from './ListItem.jsx';

const CollectionList = (props) => {
  let restaurants;
  if (props.listName === 'Reviews') {
    restaurants = [{
      name: 'Ramen House',
      rating: 8,
      cuisine: 'Japanese',
      hours: '11 am - 8 pm, 7 days/wk',
      preview: 'See details',
      id: 1
    },
    {
      name: 'Ramen place',
      rating: 8,
      cuisine: 'Japanese',
      hours: '11 am - 8 pm, 7 days/wk',
      preview: 'See details',
      id: 2
    }];
  } else if (props.listName === 'New Search') {
    restaurants = props.searchResults;
  }

  else {
    restaurants = [{
      name: 'Ramen House',
      rating: 8,
      cuisine: 'Japanese',
      hours: '11 am - 8 pm, 7 days/wk',
      preview: 'See details',
      id: 1
    }]
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