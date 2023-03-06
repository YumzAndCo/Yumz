import React from 'react';
import VerticalNav from './VerticalNav.jsx';
import MainNav from './MainNav.jsx';
import Header from './Header.jsx';
import styles from '../stylesheets/landing.css';

const Landing = props => {

  return (
    <div id='landing'>
      <VerticalNav />
      <Header />
      <MainNav />
    </div>
  );
};

export default Landing;