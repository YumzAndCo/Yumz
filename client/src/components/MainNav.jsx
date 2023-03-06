import React from 'react';
import MainNavItem from './MainNavItem.jsx';
import { faBurger, faMugHot, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../stylesheets/main-nav.css';

const MainNav = props => {
  const onMainNavBtnClick = (event, btnName) => {
    console.log(btnName, 'clicked!');
  };

  // Note: if we add the feature to allow users to create custom collections,
  // then MainNavItem components can be generated on the results of a GET for a user's
  // collections
  return (
    <div id="main-nav">
      <MainNavItem
        iconName={faBurger}
        btnId="main-nav-reviews"
        btnText="Reviews"
        onClickHandler={onMainNavBtnClick} />
      <MainNavItem
        iconName={faMugHot}
        btnId="main-nav-wishlist"
        btnText="Wishlist"
        onClickHandler={onMainNavBtnClick} />
      <MainNavItem
        iconName={faHeart}
        btnId="main-nav-favorites"
        btnText="Favorites"
        onClickHandler={onMainNavBtnClick} />
    </div>
  );
};

export default MainNav;