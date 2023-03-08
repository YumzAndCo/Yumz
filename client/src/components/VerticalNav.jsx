import React from 'react';
import { faPlus, faUser, faHouse } from '@fortawesome/free-solid-svg-icons';
import styles from '../stylesheets/vertical-nav.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VerticalNav = props => {
  const navigate = useNavigate();

  return (
    <div id="vertical-nav">
      <VerticalNavItem
        iconName={faHouse}
        btnName="home"
        onClickHandler={() => navigate('/')} />
      <VerticalNavItem
        iconName={faUser}
        btnName="user"
        onClickHandler={() => navigate('/login')} />
      <VerticalNavItem
        iconName={faPlus}
        btnName="addRestaurant"
        onClickHandler={() => navigate('/new-restaurant')} />
    </div>
  );
};

const VerticalNavItem = props => {
  return (
    <button
      className="vertical-nav-btn"
      onClick={() => props.onClickHandler(props.btnName)}>
      <FontAwesomeIcon icon={props.iconName} />
    </button>
  );
};


export default VerticalNav;
