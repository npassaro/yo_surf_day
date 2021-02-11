import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

export function AddSurfDay(props) {
  const [dayAwesomenessRating, setDayAwesomenessRating ] = useState("so-so");

  const handleDayAwesomenessRatingChange = ({ target }) => {
    setDayAwesomenessRating(target.value);
  }

  const [dayDescription, setDayDescription ] = useState('');

  useEffect(() => {
    console.log("Description:", dayDescription);
  });

  const handleDayDescriptionChange = ({ target }) => {
    setDayDescription(target.value);
  }

  const handleSubmit = ({ target }) => {
    console.console.warn("Submitted", target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Was it good?
        <input type="radio" value="1" value={dayAwesomenessRating} onChange={handleDayAwesomenessRatingChange} />
      </label>
      <label>
        Tell me more:
        <textarea value={dayDescription} onChange={handleDayDescriptionChange} placeholder="Hey! How was it grom?">
        </textarea>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

AddSurfDay.defaultProps = { }

AddSurfDay.propTypes = {
  dayDescription: PropTypes.string,
  dayAwesomeness: PropTypes.number
}
