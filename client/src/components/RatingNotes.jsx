import React from 'react';

const RatingNotes = props => {
  return (
    <>
      <textarea id="rating-notes" type="text" />
      <button className="details-modal-btn"
        onClick={props.clickHandler}>
        {props.buttonText}
      </button>
    </>
  );
};

export default RatingNotes;