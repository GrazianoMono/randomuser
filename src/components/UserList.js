import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import Loading from './Loading'

function UserList({ items, loading }) {
    if(loading) return <Loading loading={loading}></Loading>
    if (!items || items.length === 0) return <p>No items...</p>

    return (
        <div className="user-list">
            {items.map(el => (
                <UserCard key={el.id} user={el}/>
            ))}
        </div>
    );
}

UserList.propTypes = {
    items: PropTypes.array
};

export default UserList
