import React from 'react';
import Detail from './Detail.jsx';
import DetailsTable from './DetailsTable.jsx';
import styles from '../stylesheets/details-modal.css';
import { faLocationDot, faCircleInfo, faPhone, faTruckFast, faShirt, faCar } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCreditCard, faFileLines } from '@fortawesome/free-regular-svg-icons';

const RestaurantInfo = props => {
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
  return (
    <>
      <div className="section-header">
        <span>Info</span>
      </div>
      {mainDetails}
      <DetailsTable details={details} />
    </>

  );
};

export default RestaurantInfo;