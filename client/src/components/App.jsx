import React, { Component, useState, useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import styles from '../stylesheets/styles.css';
import { Login } from './Login.jsx';
import { Signup } from './Signup.jsx';
import { Reviews } from './Reviews.jsx';
import { Favorites } from './Favorites.jsx';
import { Wishlist } from './Wishlist.jsx';
import Landing from './Landing.jsx';
import { CollectionList } from './CollectionList.jsx';
import DetailsModal from './DetailsModal.jsx';
import NewRestaurant from './NewRestaurant.jsx';
import { useNavigate } from 'react-router-dom';
import helperFns from '../helperFns.js';



function App() {
  useEffect(() => {
    console.log(helperFns);
    helperFns.getUserCoords();
  }, []);

  return (

    <div className="router">

      <Routes>

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/collection' element={<CollectionList />} />
        <Route path='/' element={<Landing />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/details-modal' element={<DetailsModal show={true} />} />
        <Route path='/new-restaurant' element={<NewRestaurant />} />
      </Routes>
    </div>

  );
}

export default App;