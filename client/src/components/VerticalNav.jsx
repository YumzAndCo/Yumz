import React from 'react';
import { faPlus, faFaceSmile, faBook } from '@fortawesome/free-solid-svg-icons';
import styles from '../stylesheets/vertical-nav.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VerticalNav = props => {

  const navigate = useNavigate();
  const onNavItemClick = (event, btnName) => {
    switch (btnName) {
      case 'add-restaurant':
        navigate('/new-restaurant');
        break;
      default:
        navigate('/login');
    }
  };

  return (
    <div id="vertical-nav">
      <VerticalNavItem
        iconName={faFaceSmile}
        btnName="user"
        onClickHandler={(e) => navigate('/login')} />
      <VerticalNavItem
        iconName={faPlus}
        btnName="add-restaurant"
        onClickHandler={(event) => onNavItemClick(event, 'add-restaurant')} />
      {/* <VerticalNavItem
        iconName={faBook}
        btnName="user"
        onClickHandler={onNavItemClick} /> */}
    </div>
  );
};

const VerticalNavItem = props => {
  return (
    <button
      className="vertical-nav-btn"
      onClick={(event) => props.onClickHandler(event, props.btnName)}>
      <FontAwesomeIcon icon={props.iconName} />
    </button>
  );
};


export default VerticalNav;
