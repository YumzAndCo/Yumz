import React, { useState } from 'react';
import '../stylesheets/ratings-table.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as hollowStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RatingsTable = props => {

  return (
    <table id="ratings-table">
      <tbody>
        {/* ROW 1 */}
        <tr>
          <td className="rating-label">
            Overall:
          </td>
          <td className="stars">
            <RatingStars key={1} />
          </td>
        </tr>
        {/* ROW 2 */}
        <tr>
          <td className="rating-label">
            Food:
          </td>
          <td className="stars">
            <RatingStars key={2} />
          </td>
        </tr>
        {/* ROW 3 */}
        <tr>
          <td className="rating-label">
            Price:
          </td>
          <td className="stars">
            <RatingStars key={3} />
          </td>
        </tr>
        {/* ROW 4 */}
        <tr>
          <td className="rating-label">
            Service:
          </td>
          <td className="stars">
            <RatingStars key={4} />
          </td>
        </tr>
        {/* ROW 5 */}
        <tr>
          <td className="rating-label">
            Atmosphere:
          </td>
          <td className="stars">
            <RatingStars key={5} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const RatingStars = props => {
  const [numFilledStars, setNumFilledStars] = useState(0);

  const onStarClick = (starId) => {
    /*
    NOTE: It seems like the "hit" box of the star doesn't line up with the star
    Seems like it's to the left of the starl... not sure why??
    */
    if (starId.length) {
      const starNum = Number(starId.split('star')[1]);
      setNumFilledStars(starNum);
    } else {
      console.log('empty id');
    }
  };

  const stars = [];
  let filledStarsCount = 0;
  for (let i = 1; i < 6; i++) {
    let star;
    if (filledStarsCount < numFilledStars) {
      star =
        <span id={`star${i}`}
          onClickCapture={(event) => onStarClick(event.target.id)}
          className="rating-star"
          key={i}>
          <FontAwesomeIcon
            icon={faStar}
            id={`star${i}`} />
        </span>;
      filledStarsCount++;
    } else {
      star =
        <span id={`star${i}`}
          onClickCapture={(event) => onStarClick(event.target.id)}
          className="rating-star"
          key={i}>
          <FontAwesomeIcon
            icon={hollowStar}
            className="rating-star"
            id={`star${i}`} />
        </span>;
    }
    stars.push(star);
  }

  return (
    <span id="rating-stars">
      {stars}
    </span>
  );
};

export default RatingsTable;