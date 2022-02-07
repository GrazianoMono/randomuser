import React from 'react';
import PropTypes from 'prop-types';
import noImagePlaceHolder from "../assets/images/NoImagePlaceHolder.png";

function Avatar({ src }) {
    const image = src ?? noImagePlaceHolder;

    return (
        <div className="avatar">
            <img className="avatar__image" src={image} alt="" />
        </div>
    );
}

Avatar.propTypes = {
    src: PropTypes.string
};

export default Avatar;
