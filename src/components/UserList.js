import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

function UserList({ items }) {
    console.log(items)
    if (!items || items.length === 0) return <p>No items...</p>

    return (
        <div className="user-list">
            {items.map(el => (
                <UserCard key={el.id} avatar={el.avatar} />
            ))}
        </div>
    );
}

UserList.propTypes = {
    items: PropTypes.array
};

export default UserList
