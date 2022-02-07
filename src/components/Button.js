import React from 'react'
import PropTypes from 'prop-types';

function Button({ onClick, label }) {
    return (
        <button type="button" onClick={onClick}>
            {label}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string
};

export default Button;