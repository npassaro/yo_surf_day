import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown';

export function DayDescription({isEditing, dayDescription, onDayDescriptionChange, onClickDayDescription }) {
    const placeholder = "Hey! How was it grom?";
    if(isEditing) {
        return(
            <textarea 
                className="DayDescription_textarea DayDescription_textarea-isEditing" 
                value={dayDescription} 
                onChange={onDayDescriptionChange} 
                placeholder={placeholder}>
            </textarea>
        );
    }
    return (
        <div 
          className="DayDescription_textarea"
          onClick={onClickDayDescription}
        >
          <ReactMarkdown
            children={dayDescription.length === 0 ? placeholder : dayDescription}
          />
        </div>
    );
}

DayDescription.defaultProps = {
    isEditing: false,
    dayDescription: ""    
};

DayDescription.propTypes = {
    isEditing: PropTypes.bool,
    dayDescription: PropTypes.string,
    onDayDescriptionChange: PropTypes.func,
    onClickDayDescription: PropTypes.func    
};
