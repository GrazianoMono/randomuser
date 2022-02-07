import React from 'react';
import PropTypes from 'prop-types';

function Info ({ fullname, role }) {
    return <div className='info'>
        <p className='info__full-name'>{fullname}</p>
        <p className='info__role'>{role}</p>
    </div>
}

Info.propTypes = {
    fullname: PropTypes.string,
    role: PropTypes.string
};

export default Info