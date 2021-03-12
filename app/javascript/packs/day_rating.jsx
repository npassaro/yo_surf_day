import React from "react";
import PropTypes from "prop-types";
import { SurfIcon } from "./surf_icon";
export function DayRating({onChange, rating, possibleRatings}) {
    const isChecked = (rating, possibleRating) => rating >= possibleRating;
    const iconClassName = (isChecked) => isChecked ? "DayRating_icon DayRating_icon--isChecked" : "DayRating_icon" 
    const ratingInputs = Object.keys(possibleRatings).map((possibleRatingKey) => (
        <label key={possibleRatings[possibleRatingKey].value} >
          <SurfIcon className={iconClassName(isChecked(rating, possibleRatings[possibleRatingKey].value))} ></SurfIcon>
          <input
            type="radio"
            value={possibleRatingKey}
            defaultChecked={isChecked(rating, possibleRatings[possibleRatingKey].value)}
            onClick={() => onChange(possibleRatings[possibleRatingKey].value)}
            className="DayRating_input"
          /> {possibleRatings[possibleRatingKey].text}
        </label>
    ));
    
    return (
        <div>
          {ratingInputs}
        </div>
    );
}

DayRating.defaultProps = { };

DayRating.propTypes = {
    onChange: PropTypes.func,
    rating: PropTypes.number,
    possibleRatings: PropTypes.object,
}
