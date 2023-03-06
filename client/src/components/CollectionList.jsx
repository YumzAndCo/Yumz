import React, { Component, useState } from 'react';
import  '../stylesheets/listview.css';
import ListItem from './ListItem.jsx';

export const CollectionList = (props) => {
  
  const [restaurants, setRestaurants] = useState([{
    props
  }]);

  return (
    <ListItem restaurants={props.restaurants}/>
  );
};
