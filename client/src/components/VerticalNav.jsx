import React from 'react';
import VerticalNavItem from './VerticalNavItem.jsx';
import { faPlus, faFaceSmile, faBook } from '@fortawesome/free-solid-svg-icons';
import styles from '../stylesheets/vertical-nav.css';

const VerticalNav = props => {

  const onNavItemClick = (event, btnName) => {
    console.log(btnName, 'button has been clicked');
  };

  return (
    <div id="vertical-nav">
      <VerticalNavItem
        iconName={faFaceSmile}
        btnName="user"
        onClickHandler={onNavItemClick} />
      <VerticalNavItem
        iconName={faPlus}
        btnName="add-restaurant"
        onClickHandler={onNavItemClick} />
      <VerticalNavItem
        iconName={faBook}
        btnName="user"
        onClickHandler={onNavItemClick} />
    </div>
  );
};

export default VerticalNav;
