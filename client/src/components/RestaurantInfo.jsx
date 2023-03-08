import React from 'react';
// import styles from '../stylesheets/details-modal.css';
import { faLocationDot, faCircleInfo, faPhone, faTruckFast, faShirt, faCar } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCreditCard, faFileLines } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../stylesheets/detail.css';

const RestaurantInfo = props => {
  const mainDetails = [];
  const details = {};
  mainDetails.push(
    <Detail
      iconName={faLocationDot}
      text={props.info.address}
      url={`https://maps.google.com/?q=${props.info.address}`}
      key={1}
    />
  );
  mainDetails.push(
    <Detail
      iconName={faCircleInfo}
      text={props.info.category}
      key={2}
    />
  );
  let hoursStr = '';
  if (Array.isArray(props.info.hours)) {
    props.info.hours.forEach((dayStr, index) => {
      if (index === props.info.hours.length - 1) {
        hoursStr += dayStr;
      } else {
        hoursStr += dayStr + ', ';
      }
    });
  } else {
    hoursStr = 'N/A';
  }
  mainDetails.push(
    <Detail
      iconName={faClock}
      text={hoursStr}
      key={3}
    />
  );

  details['parking'] =
    <Detail
      iconName={faCar}
      text={props.info.parking}
      key={4}
    />;

  const deliveryTxt = props.info.delivery ? 'Offers delivery' : 'No delivery'
  details['delivery'] =
    <Detail
      iconName={faTruckFast}
      text={deliveryTxt}
      key={5}
    />;

  details['dress-code'] =
    <Detail
      iconName={faShirt}
      text={props.info['dress-code']}
      key={6}
    />;

  const creditCardTxt = props.info['credit-cards'] ? 'Accepts credit cards' : 'Does not accept credit cards';
  details['credit-cards'] =
    <Detail
      iconName={faCreditCard}
      text={creditCardTxt}
      key={7}
    />;

  details['menu'] =
    <Detail
      iconName={faFileLines}
      text="View menu"
      url={props.info.menu}
      key={8}
    />;

  const reservationsTxt = props.info.reservations ? 'Takes reservations' : 'No reservations';
  details['reservations'] =
    <Detail
      iconName={faPhone}
      text={reservationsTxt}
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

const Detail = props => {

  if (Object.hasOwn(props, 'url')) {
    return (
      <div className="restaurant-detail">
        <a href={props.url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={props.iconName}
            className="details-modal-icon" />
          {props.text}
        </a>
      </div>
    );
  } else {
    return (
      <div className="restaurant-detail">
        <FontAwesomeIcon
          icon={props.iconName}
          className="details-modal-icon" />
        {props.text}
      </div>
    );
  }
};

const DetailsTable = props => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {props.details['reservations']}
          </td>
          <td>
            {props.details['menu']}
          </td>
        </tr>
        <tr>
          <td>
            {props.details['credit-cards']}
          </td>
          <td>
            {props.details['dress-code']}
          </td>
        </tr>
        <tr>
          <td>
            {props.details['delivery']}
          </td>
          <td>
            {props.details['parking']}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RestaurantInfo;