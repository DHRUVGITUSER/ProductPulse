import React from 'react';
import ItemCard from './ItemCard';

const ItemGrid = ({ items }) => {
    if (!items || items.length === 0) {
        return (
            <div className="status-container">
                <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="status-text" style={{ color: '#4B5563', marginBottom: '8px' }}>No items found</h3>
                <p className="status-text">Try adjusting your search terms</p>
            </div>
        );
    }

    return (
        <div className="item-grid">
            {items.map((item, index) => (
                <ItemCard key={item.id} item={item} index={index} />
            ))}
        </div>
    );
};

export default ItemGrid;