import React, { Component, useState } from 'react';

const ListItem = (restaurants, listName) => {
  // const restaurants = props.restaurants;
  // const listTitle = props.title;

  return (
    <div className = "listview">
      <div className = "collectionTitle">{listName}</div>
      {restaurants.map((place) => 
        (<div className="preview" key={place.id}>
          <span>{place.name}</span> 
          <span>{place.rating} ☆</span>
          <span>{place.cuisine}</span>
          <span>{place.hours}</span>
        </div>)
      )}
    </div>
  );
};

export default ListItem;