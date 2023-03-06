import React from 'react';
import Detail from './Detail.jsx';
import DetailsTable from './DetailsTable.jsx';
import RatingsTable from './RatingsTable.jsx';
import styles from '../stylesheets/details-modal.css';
import { faLocationDot, faCircleInfo, faPhone, faTruckFast, faShirt, faCar } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCreditCard, faFileLines } from '@fortawesome/free-regular-svg-icons';

const DetailsModal = props => {
  const closeModal = () => {
    // TO DO - this function should probably be passed in through props??
    console.log('close modal button clicked');
  };

  const onSaveChangesBtnClick = () => {
    // TO DO
    // Should make a request to PATCH /rating with changes
    console.log('save changes button clicked');
  };

  /* TO DO:
    - Iterate through props and create Detail components
    - Can use the database ID as the key
  */
  const mainDetails = [];
  const details = {};
  mainDetails.push(
    <Detail
      iconName={faLocationDot}
      text="3041 Stevens Creek Blvd, Santa Clara, CA 95050"
      url="https://maps.google.com/?q=3041 Stevens Creek Blvd, Santa Clara, CA 95050"
      key={1}
    />
  );
  mainDetails.push(
    <Detail
      iconName={faCircleInfo}
      text="American (Traditional), Pizza, Pasta Shops"
      key={2}
    />
  );
  mainDetails.push(
    <Detail
      iconName={faClock}
      text="Sunday - Saturday 11:00 AM - 10:00 PM"
      key={3}
    />
  );

  details['parking'] =
    <Detail
      iconName={faCar}
      text="Private lot parking"
      key={4}
    />;

  details['delivery'] =
    <Detail
      iconName={faTruckFast}
      text="Offers delivery"
      key={5}
    />;

  details['dress-code'] =
    <Detail
      iconName={faShirt}
      text="Casual"
      key={6}
    />;

  details['credit-cards'] =
    <Detail
      iconName={faCreditCard}
      text="Accepts credit cards"
      key={7}
    />;

  details['menu'] =
    <Detail
      iconName={faFileLines}
      text="View menu"
      url="https://www.google.com"
      key={8}
    />;

  details['reservations'] =
    <Detail
      iconName={faPhone}
      text="Takes reservations"
      key={9}
    />;

  // TO DO - set last edited date text
  const lastEdited = 'last edited March 6, 2023';

  return (
    <div id="details-modal">
      <div id="restaurant-name">
        The Cheesecake Factory
        <span
          id="closeBtn"
          onClick={closeModal}>x</span>
      </div>
      <div className="section-header">
        <span>Info</span>
      </div>
      {mainDetails}
      <DetailsTable details={details} />
      <div className="section-header">
        <span>Ratings
          <span id="last-edited-date">({lastEdited})</span>
        </span>
      </div>
      {/* TO DO - set numStarsFilled from props */}
      <RatingsTable />
      <div className="section-header">
        <span>Notes</span>
      </div>
      <textarea id="rating-notes" type="text" />
      <button className="details-modal-btn"
        onClick={onSaveChangesBtnClick}>Save Changes</button>
    </div>
  );
};

export default DetailsModal;