import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Info from './Info'

function UserCard({ user }) {
    return (
        <div className="user">
		    <Avatar src={user.avatar} />
            <Info fullname={user.first_name + ' ' + user.last_name} role={user.employment.title}></Info>
	    </div>
    );
}

UserCard.propTypes = {
    avatar: PropTypes.string
};


export default UserCard;