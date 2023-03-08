import React, { Component, useState } from 'react';
import '../stylesheets/listview.css';
import DetailsModal from './DetailsModal.jsx';

const CollectionList = (props) => {

  const [restaurants, setRestaurants] = useState(props.restaurants); //array
  const [listName, setListName] = useState(props.listName);

  return (
    <div className="listview" >
      <div className="collectionTitle">{listName}</div>
      {restaurants.map((listing) => ( //each restautant in array, return a listitem
        <ListItem listing={listing} key={listing.id} />
      ))}

    </div>

  );
};

const ListItem = (props) => {
  const [modalStatus, setModalStatus] = useState(false);
  const openModal = (e) => {
    return <DetailsModal show={modalStatus} close={() => setModalStatus(false)} />
  };

  return (
    <div className="preview">
      <span className="item" id="name">{props.listing.name}</span>
      <span className="item" id="stars">{props.listing.rating} ☆</span>
      <span className="item" id="cuisine">{props.listing.cuisine}</span>
      <span className="item" id="hours">{props.listing.hours}</span>
      <button type="button" className="previewButton" onClick={() => setModalStatus(true)}>{props.listing.preview}</button>
      <DetailsModal show={modalStatus} close={() => setModalStatus(false)} />
    </div>
  );
};

export default CollectionList;