import React from 'react';
import logo from '../../assets/images/Logo.png';
import styles from '../stylesheets/header.css';

const Header = props => {
  return (
    <div className='header'>
      <img src={logo} />
    </div>
  );
};

export default Header;