import React, { useState } from 'react';

const ItemCard = ({ item, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Optimize star rendering
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        return Array.from({ length: 5 }).map((_, i) => {
            if (i < fullStars) {
                return <span key={i} className="star-filled">★</span>;
            } else if (i === fullStars && hasHalfStar) {
                return <span key={i} className="star-filled" style={{ opacity: 0.6 }}>★</span>;
            } else {
                return <span key={i}>★</span>;
            }
        });
    };

    const delay = `${(index % 10) * 0.1}s`;

    return (
        <div className="item-card" style={{ animationDelay: delay }}>
            <div className="item-image-wrapper">
                {!imageLoaded && (
                    <div className="spinner" style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)',
                        width: '30px', 
                        height: '30px', 
                        borderWidth: '3px' 
                    }}></div>
                )}
                <img
                    src={item.image}
                    alt={item.title}
                    className={`item-image ${imageLoaded ? 'loaded' : ''}`}
                    onLoad={() => setImageLoaded(true)}
                    loading="lazy"
                />
            </div>

            <div className="item-content">
                <span className="item-category">
                    {item.category}
                </span>

                <h3 className="item-title" title={item.title}>
                    {item.title}
                </h3>

                <p className="item-desc" title={item.description}>
                    {item.description}
                </p>

                <div className="item-rating">
                    <div className="stars">
                        {renderStars(item.rating?.rate || 0)}
                    </div>
                    <span className="rating-count">
                        ({item.rating?.count || 0} reviews)
                    </span>
                </div>

                <div className="item-footer">
                    <span className="item-price">
                        ${item.price.toFixed(2)}
                    </span>
                    <button className="btn-view">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;