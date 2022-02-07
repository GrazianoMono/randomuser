import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

function UserCard({ avatar }) {
    return (
        <div className="user">
		    <Avatar src={avatar} />
	    </div>
    );
}

UserCard.propTypes = {
    avatar: PropTypes.string
};


export default UserCard;