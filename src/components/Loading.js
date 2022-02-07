import React from "react";
import propTypes from "prop-types";
import loadingImage from '../assets/images/LoadingImage.svg'

function Loading ({ loading }) {
    return (loading) ? <img className="loading" alt="Loading data" src={loadingImage}/> : <p>No items...</p>
}

Loading.propTypes = {
    loading: propTypes.bool
}

export default Loading