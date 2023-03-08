import React, { Component, useState, useEffect } from 'react';
import { CollectionList } from './CollectionList.jsx';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [listItems, setListItems] = useState([
    {
      name: 'Ramen House',
      rating: 8,
      cuisine: 'Japanese',
      hours: '11 am - 8 pm, 7 days/wk',
      preview: 'Lorem ipsum...',
      id: 1,
    },
    {
      name: 'Ramen place',
      rating: 8,
      cuisine: 'Japanese',
      hours: '11 am - 8 pm, 7 days/wk',
      preview: 'Lorem ipsum...',
      id: 2,
    },
  ]);

  // useEffect(() => {
  //   async function fetchReviews() {
  //     return fetch('/reviews')
  //       .then(data => data.json())
  //       .then(data => setListItems(data));
  //   }
  //   fetchReviews();
  // });

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const response = await fetch('/reviews');
  //     const data = response.json();
  //     setReviews(data);
  //   };
  //   fetchReviews();
  // }, []);

  return (
    // <div>
    //   {reviews.map((review) => (
    //     <div key={review._id}>
    //       <p>Overall Score: {review.overall_score}</p>
    //       <p>Service Score: {review.service_score}</p>
    //       <p>Food Score: {review.food_score}</p>
    //       <p>Atmosphere Score: {review.atmosphere_score}</p>
    //       <p>Price Score: {review.price_score}</p>
    //       <p>Notes: {review.notes}</p>
    //     </div>
    //   ))}

    <CollectionList restaurants={listItems} listName='Reviews' />
    // </div>
  );
};
