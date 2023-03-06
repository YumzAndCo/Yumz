import React from 'react';
import VerticalNavItem from './VerticalNavItem.jsx';
import { faPlus, faFaceSmile, faBook } from '@fortawesome/free-solid-svg-icons';
import styles from '../stylesheets/vertical-nav.css';
import { useNavigate } from 'react-router-dom';

const VerticalNav = props => {

  const navigate = useNavigate();
  const onNavItemClick = (event, btnName) => {
    navigate('/login');
  };

  return (
    <div id="vertical-nav">
      <VerticalNavItem
        iconName={faFaceSmile}
        btnName="user"
        onClickHandler={(e) => navigate('/signup')} />
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
