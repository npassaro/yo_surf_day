import React from 'react';
import PropTypes from 'prop-types';

import { createUseStyles } from 'react-jss';

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    label: {
        fontSize: 'x-small',
        fontFamily: 'sans-serif'
    },
    input: {
        fontStyle: 'italic',
        width: '56px'
    },
    formGroup: {
        flex: '0 1 1rem',
        justifyContent: 'flex-end',
        margin: '5px',
        display: 'flex',
        flexDirection: 'column'
    }
});

export function DayPrediction({ prediction, onChange }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.formGroup}>
                <label className={classes.label}>Swell Height</label>
                <input
                    className={classes.input}
                    onChange={({ target }) =>
                        onChange({ ...prediction, swellHeight: target.value })
                    }
                />
            </div>
            <div className={classes.formGroup}>
                <label className={classes.label}>Swell Period</label>
                <input
                    className={classes.input}
                    onChange={({ target }) =>
                        onChange({ ...prediction, swellPeriod: target.value })
                    }
                />
            </div>
            <div className={classes.formGroup}>
                <label className={classes.label}>Swell Direction</label>
                <input
                    className={classes.input}
                    onChange={({ target }) =>
                        onChange({ ...prediction, swellDirection: target.value })
                    }
                />
            </div>
            <div className={classes.formGroup}>
                <label className={classes.label}>Energy</label>
                <input
                    className={classes.input}
                    onChange={({ target }) => onChange({ ...prediction, energy: target.value })}
                />
            </div>
            <div className={classes.formGroup}>
                <label className={classes.label}>Wind Speed</label>
                <input
                    className={classes.input}
                    onChange={({ target }) => onChange({ ...prediction, windSpeed: target.value })}
                />
            </div>
            <div className={classes.formGroup}>
                <label className={classes.label}>Wind Gusts</label>
                <input
                    className={classes.input}
                    onChange={({ target }) => onChange({ ...prediction, windGusts: target.value })}
                />
            </div>
            <div className={classes.formGroup}>
                <label className={classes.label}>Wind Direction</label>
                <input
                    className={classes.input}
                    onChange={({ target }) =>
                        onChange({ ...prediction, windDirection: target.value })
                    }
                />
            </div>
            <div className={classes.formGroup}>
                <label className={classes.label}>Water Temperature</label>
                <input
                    className={classes.input}
                    onChange={({ target }) =>
                        onChange({ ...prediction, waterTemperature: target.value })
                    }
                />
            </div>
        </div>
    );
}
