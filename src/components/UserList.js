import React from 'react';
import PropTypes from 'prop-types';

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

UserCard.PropTypes = {
    items: PropTypes.array
};

export default UserList
