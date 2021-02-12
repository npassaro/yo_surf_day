import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown'

export function AddSurfDay(props) {
  const [dayAwesomenessRating, setDayAwesomenessRating ] = useState("so-so");
  const [dayDescription, setDayDescription ] = useState('');
  const [isEditing, setIsEditing] = useState(false);


  const handleDayAwesomenessRatingChange = ({ target }) => {
    setDayAwesomenessRating(target.value);
  }

  const handleStartEditingDayDescription = ({ target }) => {
    setIsEditing(true);
  }

  const handleDayDescriptionChange = ({ target }) => {
    setDayDescription(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // This should be on a effect after successful submission
    setIsEditing(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Was it good?
        <input type="radio" value="1" value={dayAwesomenessRating} onChange={handleDayAwesomenessRatingChange} />
      </label>
      <DayDescription 
        dayDescription={dayDescription}
        isEditing={isEditing}
        onDayDescriptionChange={handleDayDescriptionChange}
        onClickDayDescription={handleStartEditingDayDescription}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

function DayDescription(props) {
  if(props.isEditing) {
   return(
    <label>
    Tell me more:
    <textarea 
      className="DayDescription-show" 
      value={props.dayDescription} 
      onChange={props.onDayDescriptionChange} 
      placeholder="Hey! How was it grom?">
    </textarea>
  </label> 
    );
  }
  return (
    <div 
      className="DayDescription-show"
      onClick={props.onClickDayDescription}
    >
      <ReactMarkdown children={props.dayDescription} />
    </div>
  );
}

AddSurfDay.defaultProps = { }

AddSurfDay.propTypes = {
  dayDescription: PropTypes.string,
  dayAwesomeness: PropTypes.number
}
