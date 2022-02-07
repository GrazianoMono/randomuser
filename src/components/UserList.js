import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

function UserList({ items }) {
    if (items.length === 0) return <p>No items...</p>

    return (
        <div className="user-list">
            {items.map(el => (
                <UserCard avatar={el.avatar} />
            ))}
        </div>
    );
}

UserList.PropTypes = {
    items: PropTypes.array
};

export default UserList
