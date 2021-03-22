import locale from 'date-fns/locale/en-GB';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { saveSurfDay } from './add_surf_day.service';
import { DayDescription } from './day_description';
import { DayPrediction } from './day_prediction';
import { DayRating } from './day_rating';

registerLocale('en-GB', locale);
setDefaultLocale('en-GB');

export function AddSurfDay({ csrfToken }) {
    const awesomenessDayRatings = {
        low: {
            value: 1,
            text: 'Nah'
        },
        medium: {
            text: 'So-So',
            value: 2
        },
        high: {
            text: 'Brahhh!',
            value: 3
        }
    };
    const [dayAwesomenessRating, setDayAwesomenessRating] = useState(
        awesomenessDayRatings.medium.value
    );
    const [dayDateAndTime, setDayDateAndTime] = useState(new Date().toISOString());
    const [dayDescription, setDayDescription] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [dayPrediction, setDayPrediction] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleDayAwesomenessRatingChange = (value) => {
        console.log(value);
        setDayAwesomenessRating(value);
    };

    const handleStartEditingDayDescription = ({ target }) => {
        setIsEditing(true);
    };

    const handleDayDescriptionChange = ({ target }) => {
        setDayDescription(target.value);
    };

    const handleDayDateAndTimeChange = (dateAndTime) => {
        setDayDateAndTime(dateAndTime.toISOString());
    };

    const handleDayPredictionChange = (dayPrediction) => {
        setDayPrediction(dayPrediction);
    };

    useEffect(async () => {
        if (isLoading) {
            return await saveSurfDay(csrfToken, {
                dayAwesomenessRating,
                dayDateAndTime,
                dayDescription,
                dayPrediction
            })
                .catch((error) => {
                    console.error('Error:', error);
                })
                .then(() => setIsLoading(false));
        }
    }, [isLoading]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // This should be on a effect after successful submission
        setIsEditing(false);
        setIsLoading(true);
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
                        selected={new Date(dayDateAndTime)}
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
                <DayPrediction onChange={handleDayPredictionChange} prediction={dayPrediction} />
                {isLoading ? <div>Submitting...</div> : <input type="submit" value="Submit" />}
            </form>
            <div>
                Icons made by{' '}
                <a href="https://smashicons.com/" title="Smashicons">
                    Smashicons
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
        </div>
    );
}

AddSurfDay.defaultProps = {};

AddSurfDay.propTypes = {
    dayDescription: PropTypes.string,
    dayAwesomeness: PropTypes.number
};
