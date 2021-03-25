import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export function DayDescription({
    isEditing,
    dayDescription,
    onDayDescriptionChange,
    onClickDayDescription
}) {
    const placeholder = 'Hey! How was it grom?';
    if (isEditing) {
        return (
            <textarea
                className="DayDescription_textarea DayDescription_textarea-isEditing"
                value={dayDescription}
                onChange={onDayDescriptionChange}
                placeholder={placeholder}></textarea>
        );
    }
    return (
        <div
            role="textbox"
            className="DayDescription_textarea"
            tabIndex={0}
            onClick={onClickDayDescription}>
            <ReactMarkdown>
                {dayDescription.length === 0 ? placeholder : dayDescription}
            </ReactMarkdown>
        </div>
    );
}

DayDescription.defaultProps = {
    isEditing: false,
    dayDescription: ''
};

DayDescription.propTypes = {
    isEditing: PropTypes.bool,
    dayDescription: PropTypes.string,
    onDayDescriptionChange: PropTypes.func,
    onClickDayDescription: PropTypes.func
};
