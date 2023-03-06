import React, { Component, useState } from 'react';
import DetailsModal from './DetailsModal.jsx';

const ListItem = (props) => {

  const [modalStatus, setModalStatus] = useState(false);
  const openModal = (e) => {
    return <DetailsModal show={modalStatus} close={() => setModalStatus(false)} />
  };
  
  return (

    <div className="preview">
      <span>{props.listing.name}</span> 
      <span>{props.listing.rating} ☆</span>
      <span>{props.listing.cuisine}</span>
      <span>{props.listing.hours}</span>
      <button type="button" className="previewButton" onClick={()=> setModalStatus(true)}>{props.listing.preview}</button>
      <DetailsModal show={modalStatus} close={() => setModalStatus(false)} />
    </div>

  );
};

export default ListItem;