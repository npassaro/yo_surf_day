import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { DayDescription } from "./day_description";
import { DayRating } from "./day_rating";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import locale from "date-fns/locale/en-GB";

registerLocale("en-GB", locale);
setDefaultLocale("en-GB");

import "react-datepicker/dist/react-datepicker.css";

export function AddSurfDay(props) {
    const awesomenessDayRatings = {
        "Nah": {
            value: 1,
            text: "Nah",
        }, 
        "SoSo": {
            text: "So-So",
            value: 2
        }, 
        "Brah": {
            text: "Brahhh!",
            value: 3
        }
      };
    const [dayAwesomenessRating, setDayAwesomenessRating ] = useState(awesomenessDayRatings["SoSo"].value);
    const [dayDateAndTime, setDayDateAndTime ] = useState(new Date());
    const [dayDescription, setDayDescription ] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleDayAwesomenessRatingChange = (value) => {
        setDayAwesomenessRating(value);
    };

    const handleStartEditingDayDescription = ({ target }) => {
        setIsEditing(true);
    };

    const handleDayDescriptionChange = ({ target }) => {
        setDayDescription(target.value);
    };

    const handleDayDateAndTimeChange = (dateAndTime) => {
        setDayDateAndTime(dateAndTime);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // This should be on a effect after successful submission
        setIsEditing(false);
        console.log("Submitting...", event.target.value);
    };

    return (
        <div className="DayDescription">
          <form onSubmit={handleSubmit} className="AddSurfDay_form">
            <label>
              Was it good?
              <DayRating
                rating={dayAwesomenessRating}
                onChange={handleDayAwesomenessRatingChange}
                possibleRatings={awesomenessDayRatings}
              />
            </label>
            <label>
              <DatePicker
                showTimeSelect
                selected={dayDateAndTime}
                onChange={handleDayDateAndTimeChange}
                dateFormat="PPpp"
              />
            </label>
            <DayDescription 
              dayDescription={dayDescription}
              isEditing={isEditing}
              onDayDescriptionChange={handleDayDescriptionChange}
              onClickDayDescription={handleStartEditingDayDescription}
            />
            <input type="submit" value="Submit" />
          </form>
          <div>Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    );
}


AddSurfDay.defaultProps = { };

AddSurfDay.propTypes = {
    dayDescription: PropTypes.string,
    dayAwesomeness: PropTypes.number
};
