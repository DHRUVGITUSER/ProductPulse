import React from 'react';

const Loader = () => {
    return (
        <div className="status-container">
            <div className="spinner"></div>
            <p className="status-text">Loading amazing products...</p>
        </div>
    );
};

export default Loader;