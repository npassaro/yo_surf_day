import locale from "date-fns/locale/en-GB";
import PropTypes from "prop-types";
import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DayDescription } from "./day_description";
import { DayPrediction } from "./day_prediction";
import { DayRating } from "./day_rating";

registerLocale("en-GB", locale);
setDefaultLocale("en-GB");


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
    const [dayPrediction, setDayPrediction] = useState({});
    
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

    const handleDayPredictionChange = (dayPrediction) => {
        setDayPrediction(dayPrediction);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // This should be on a effect after successful submission
        setIsEditing(false);
        console.log("Submitting...", {
          dayAwesomenessRating,
          dayDateAndTime,
          dayDescription,
          dayPrediction
        });
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
            <DayPrediction 
              onChange={handleDayPredictionChange}
              prediction={dayPrediction}
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
